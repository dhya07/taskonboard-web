import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "@/utils/api.js";

function formatName(p) {
  const u = p.userInfo || {};
  const pd =
    u.personalDetails ||
    p.personalDetails ||
    p.personalInfo ||
    {};
  const first = pd.firstName || p.firstName || "";
  const last = pd.lastName || p.lastName || "";
  const name = `${first} ${last}`.trim();
  if (name) return name;
  return u.email || p.businessInfo?.businessName || p.uid || "—";
}

function formatEmail(p) {
  return p.userInfo?.email || p.email || "—";
}

function isPending(p) {
  const s = p.status || p.application?.status;
  return s === "pending" || s === "submitted" || p.application?.status === "submitted";
}

export default function Providers() {
  const { t } = useTranslation();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [detail, setDetail] = useState(null);
  const [rejectOpen, setRejectOpen] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [actionBusy, setActionBusy] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/admin/providers");
      setProviders(data.providers || []);
    } catch (e) {
      setError(e?.response?.data?.error || e.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const pendingTop = useMemo(() => {
    return providers.filter(isPending).slice(0, 3);
  }, [providers]);

  const filtered = useMemo(() => {
    if (filter === "pending") return providers.filter(isPending);
    if (filter === "approved") return providers.filter((p) => (p.status || "") === "approved");
    if (filter === "suspended") return providers.filter((p) => (p.status || "") === "suspended");
    return providers;
  }, [providers, filter]);

  async function approve(id) {
    setActionBusy(id + "-approve");
    try {
      await api.put(`/admin/providers/${id}/approve`);
      await load();
      setDetail((d) => (d && d.uid === id ? { ...d, status: "approved" } : d));
    } finally {
      setActionBusy("");
    }
  }

  async function reject(id) {
    setActionBusy(id + "-reject");
    try {
      await api.put(`/admin/providers/${id}/reject`, {
        reason: rejectReason || "Application rejected by admin",
      });
      setRejectOpen(null);
      setRejectReason("");
      await load();
      setDetail((d) => (d && d.uid === id ? { ...d, status: "rejected" } : d));
    } finally {
      setActionBusy("");
    }
  }

  async function changeStatus(id, status) {
    setActionBusy(id + status);
    try {
      await api.put(`/admin/providers/${id}/change-status`, { status });
      await load();
      setDetail((d) => (d && d.uid === id ? { ...d, status } : d));
    } finally {
      setActionBusy("");
    }
  }

  async function refreshStripe(id) {
    setActionBusy(id + "-stripe");
    try {
      await api.post(`/admin/providers/${id}/refresh-stripe-status`);
      await load();
    } finally {
      setActionBusy("");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{t("providers.title")}</h2>
          <p className="text-sm text-gray-500">{t("providers.subtitle")}</p>
        </div>
        <div className="flex gap-2">
          {["all", "pending", "approved", "suspended"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium capitalize ${
                filter === f
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}

      {pendingTop.length > 0 ? (
        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900">{t("providers.pendingQueue")}</h3>
          <ul className="mt-3 divide-y divide-gray-100">
            {pendingTop.map((p) => (
              <li key={p.uid} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <div>
                  <p className="font-medium text-gray-900">{formatName(p)}</p>
                  <p className="text-sm text-gray-500">{formatEmail(p)}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={!!actionBusy}
                    onClick={() => void approve(p.uid)}
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
                  >
                    {t("providers.approve")}
                  </button>
                  <button
                    type="button"
                    disabled={!!actionBusy}
                    onClick={() => {
                      setRejectOpen(p.uid);
                      setRejectReason("");
                    }}
                    className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    {t("providers.reject")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDetail(p)}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {t("providers.details")}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-900">
            {t("providers.allTitle")} ({filtered.length})
          </h3>
        </div>
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading…</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">{t("providers.columns.name")}</th>
                  <th className="px-4 py-3">{t("providers.columns.email")}</th>
                  <th className="px-4 py-3">{t("providers.columns.status")}</th>
                  <th className="px-4 py-3">{t("providers.columns.stripe")}</th>
                  <th className="px-4 py-3 text-right">{t("providers.columns.actions")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((p) => (
                  <tr key={p.uid} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{formatName(p)}</td>
                    <td className="px-4 py-3 text-gray-600">{formatEmail(p)}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                        {p.status || p.application?.status || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {p.stripeAccountStatus?.charges_enabled ? "Charges on" : "—"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        type="button"
                        className="mr-2 text-blue-600 hover:underline"
                        onClick={() => setDetail(p)}
                      >
                        {t("providers.view")}
                      </button>
                      {isPending(p) ? (
                        <>
                          <button
                            type="button"
                            disabled={!!actionBusy}
                            className="mr-2 text-emerald-600 hover:underline disabled:opacity-50"
                            onClick={() => void approve(p.uid)}
                          >
                            {t("providers.approve")}
                          </button>
                          <button
                            type="button"
                            disabled={!!actionBusy}
                            className="text-red-600 hover:underline disabled:opacity-50"
                            onClick={() => setRejectOpen(p.uid)}
                          >
                            {t("providers.reject")}
                          </button>
                        </>
                      ) : null}
                      {(p.status === "approved" || p.status === "active") && p.status !== "suspended" ? (
                        <button
                          type="button"
                          disabled={!!actionBusy}
                          className="ml-2 text-amber-700 hover:underline disabled:opacity-50"
                          onClick={() => void changeStatus(p.uid, "suspended")}
                        >
                          {t("providers.suspend")}
                        </button>
                      ) : null}
                      {p.status === "suspended" ? (
                        <button
                          type="button"
                          disabled={!!actionBusy}
                          className="ml-2 text-emerald-700 hover:underline disabled:opacity-50"
                          onClick={() => void changeStatus(p.uid, "active")}
                        >
                          {t("providers.unsuspend")}
                        </button>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {rejectOpen ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900">{t("providers.rejectModalTitle")}</h4>
            <textarea
              className="mt-3 w-full rounded-lg border border-gray-200 p-2 text-sm"
              rows={4}
              placeholder={t("providers.rejectPlaceholder")}
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
                onClick={() => setRejectOpen(null)}
              >
                {t("common.cancel")}
              </button>
              <button
                type="button"
                disabled={!!actionBusy}
                className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                onClick={() => void reject(rejectOpen)}
              >
                {t("providers.reject")}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {detail ? (
        <div className="fixed inset-0 z-40 flex justify-end bg-black/40 p-4">
          <div className="flex h-full max-w-lg flex-col rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <h4 className="font-semibold text-gray-900">{t("providers.detailTitle")}</h4>
              <button type="button" className="text-gray-500 hover:text-gray-800" onClick={() => setDetail(null)}>
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 text-sm">
              <dl className="space-y-2">
                <dt className="text-xs font-semibold uppercase text-gray-500">UID</dt>
                <dd className="font-mono text-xs">{detail.uid}</dd>
                <dt className="text-xs font-semibold uppercase text-gray-500">Status</dt>
                <dd>{detail.status || "—"}</dd>
                <dt className="text-xs font-semibold uppercase text-gray-500">Application</dt>
                <dd>
                  <pre className="mt-1 max-h-48 overflow-auto rounded bg-gray-50 p-2 text-xs">
                    {JSON.stringify(detail.application || {}, null, 2)}
                  </pre>
                </dd>
                <dt className="text-xs font-semibold uppercase text-gray-500">User info</dt>
                <dd>
                  <pre className="mt-1 max-h-48 overflow-auto rounded bg-gray-50 p-2 text-xs">
                    {JSON.stringify(detail.userInfo || {}, null, 2)}
                  </pre>
                </dd>
              </dl>
            </div>
            <div className="border-t border-gray-100 p-4">
              <button
                type="button"
                disabled={!!actionBusy}
                className="w-full rounded-lg border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                onClick={() => void refreshStripe(detail.uid)}
              >
                {t("providers.refreshStripe")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
