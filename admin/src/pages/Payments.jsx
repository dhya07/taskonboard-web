import { useEffect, useState } from "react";
import api from "@/utils/api.js";

const cad = (dollars) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(dollars || 0));

export default function Payments() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let c = false;
    (async () => {
      try {
        const res = await api.get("/admin/payments/summary");
        if (!c) setData(res.data);
      } catch (e) {
        if (!c) setError(e?.response?.data?.error || e.message);
      }
    })();
    return () => {
      c = true;
    };
  }, []);

  if (error) {
    return <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>;
  }
  if (!data) return <div className="text-gray-500">Loading…</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Payments</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Monthly revenue (platform doc)</p>
          <p className="mt-2 text-2xl font-semibold">{cad(data.monthlyRevenue)}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Held / escrow bookings (approx.)</p>
          <p className="mt-2 text-2xl font-semibold">{data.heldBookingsCount ?? 0}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">Tax and Stripe detail views can extend this summary from Firestore.</p>
    </div>
  );
}
