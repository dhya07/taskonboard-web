import { useCallback, useEffect, useState } from "react";
import api from "@/utils/api.js";

export default function Disputes() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/admin/disputes", { params: { open: true } });
      setRows(data.disputes || []);
    } catch (e) {
      setError(e?.response?.data?.error || e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function resolve(id) {
    setBusy(id);
    try {
      await api.patch(`/admin/disputes/${id}`, {
        status: "resolved",
        resolutionNote: note || undefined,
        open: false,
      });
      setNote("");
      await load();
    } finally {
      setBusy("");
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Open disputes</h2>
      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}
      <textarea
        className="w-full max-w-xl rounded-lg border border-gray-200 p-2 text-sm"
        rows={2}
        placeholder="Resolution note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading…</div>
        ) : (
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Dispute ID</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((d) => (
                <tr key={d.id}>
                  <td className="px-4 py-3 font-mono text-xs">{d.disputeId || d.id}</td>
                  <td className="px-4 py-3">{d.reason}</td>
                  <td className="px-4 py-3">{d.amount != null ? `${(d.amount / 100).toFixed(2)} ${d.currency || "cad"}` : "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      disabled={!!busy}
                      className="text-blue-600 hover:underline disabled:opacity-50"
                      onClick={() => void resolve(d.id)}
                    >
                      Mark resolved
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
