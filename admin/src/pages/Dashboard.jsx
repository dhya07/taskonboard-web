import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/utils/api.js";

const cad = (n) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
    Number(n || 0),
  );

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setErr("");
      const results = await Promise.allSettled([
        api.get("/admin/summary"),
        api.get("/admin/dashboard"),
      ]);
      if (cancelled) return;
      const [sRes, dRes] = results;
      if (sRes.status === "fulfilled") setSummary(sRes.value.data);
      if (dRes.status === "fulfilled") setProfile(dRes.value.data);
      const parts = [];
      if (sRes.status === "rejected") {
        parts.push(
          sRes.reason?.response?.data?.error || sRes.reason?.message || "Summary failed",
        );
      }
      if (dRes.status === "rejected") {
        const dashErr =
          dRes.reason?.response?.data?.error ||
          dRes.reason?.message ||
          "Dashboard profile failed";
        const legacyNoFirestoreAdmin =
          dRes.reason?.response?.status === 404 &&
          String(dashErr).toLowerCase().includes("admin not found");
        // Summary can load while older APIs still 404 without admins/{uid} doc — avoid scary banner
        if (!(sRes.status === "fulfilled" && legacyNoFirestoreAdmin)) {
          parts.push(dashErr);
        }
      }
      if (parts.length) setErr(parts.join(" · "));
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const k = summary || {};

  return (
    <div className="space-y-6">
      {err ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {err}
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total bookings", value: k.totalBookings ?? "—" },
          {
            label: "Platform revenue (month)",
            value: k.monthlyRevenue != null ? cad(k.monthlyRevenue) : "—",
          },
          { label: "Active providers", value: k.activeProviders ?? "—" },
          {
            label: "Pending provider approvals",
            value: k.pendingProviders ?? "—",
          },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {profile ? (
        <p className="text-xs text-gray-400">
          {profile.firestoreProfile === false
            ? "Signed in as admin (add Firestore admins/{uid} for full profile). "
            : "Admin profile · "}
          {profile.email || profile.name || profile.uid || "—"}
        </p>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Recent tasks
            </h3>
            <Link
              className="text-sm text-blue-600 hover:underline"
              to="/bookings"
            >
              View all
            </Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {(k.recentTasks || []).map((t) => (
              <li key={t.id} className="flex justify-between py-2 text-sm">
                <span className="truncate text-gray-800">
                  {t.title || t.id}
                </span>
                <span className="shrink-0 text-gray-500">{t.status}</span>
              </li>
            ))}
            {!(k.recentTasks || []).length ? (
              <li className="py-4 text-center text-sm text-gray-500">
                No recent tasks
              </li>
            ) : null}
          </ul>
        </section>
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Provider queue (top 3)
            </h3>
            <Link
              className="text-sm text-blue-600 hover:underline"
              to="/providers"
            >
              Providers
            </Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {(k.pendingProviderPreview || []).map((p) => (
              <li key={p.uid} className="py-2 text-sm">
                <p className="font-medium text-gray-900">{p.name}</p>
                <p className="text-gray-500">{p.email}</p>
              </li>
            ))}
            {!(k.pendingProviderPreview || []).length ? (
              <li className="py-4 text-center text-sm text-gray-500">
                No pending providers
              </li>
            ) : null}
          </ul>
        </section>
      </div>
    </div>
  );
}
