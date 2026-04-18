import { useCallback, useEffect, useState } from "react";
import api from "@/utils/api.js";

export default function Customers() {
  const [clients, setClients] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detail, setDetail] = useState(null);
  const [busy, setBusy] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/admin/clients", { params: { q: q.trim() || undefined, limit: 50 } });
      setClients(data.clients || []);
    } catch (e) {
      setError(e?.response?.data?.error || e.message);
    } finally {
      setLoading(false);
    }
  }, [q]);

  useEffect(() => {
    const t = setTimeout(() => void load(), 300);
    return () => clearTimeout(t);
  }, [load]);

  async function suspend(uid, suspended) {
    setBusy(uid);
    try {
      await api.put(`/admin/clients/${uid}/suspend`, { suspended });
      await load();
      setDetail((d) => (d && d.uid === uid ? { ...d, accountStatus: suspended ? "suspended" : "active" } : d));
    } finally {
      setBusy("");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Customers</h2>
          <p className="text-sm text-gray-500">Search by email (exact) or browse recent clients.</p>
        </div>
        <input
          type="search"
          placeholder="Email search…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-72 rounded-lg border border-gray-200 px-3 py-2 text-sm"
        />
      </div>
      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
      ) : null}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading…</div>
        ) : (
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">UID</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.map((c) => (
                <tr key={c.uid} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs">{c.uid}</td>
                  <td className="px-4 py-3">{c.email || "—"}</td>
                  <td className="px-4 py-3">{c.accountStatus || "active"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      className="text-blue-600 hover:underline"
                      onClick={() => setDetail(c)}
                    >
                      View
                    </button>
                    {c.accountStatus === "suspended" ? (
                      <button
                        type="button"
                        disabled={!!busy}
                        className="ml-2 text-emerald-600 hover:underline disabled:opacity-50"
                        onClick={() => void suspend(c.uid, false)}
                      >
                        Unsuspend
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={!!busy}
                        className="ml-2 text-amber-700 hover:underline disabled:opacity-50"
                        onClick={() => void suspend(c.uid, true)}
                      >
                        Suspend
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {detail ? (
        <div className="fixed inset-0 z-40 flex justify-end bg-black/40 p-4">
          <div className="flex h-full max-w-lg flex-col rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h4 className="font-semibold">Client</h4>
              <button type="button" onClick={() => setDetail(null)} className="text-gray-500">
                ✕
              </button>
            </div>
            <pre className="flex-1 overflow-auto p-4 text-xs">{JSON.stringify(detail, null, 2)}</pre>
          </div>
        </div>
      ) : null}
    </div>
  );
}
