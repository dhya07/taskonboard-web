import { useCallback, useEffect, useState } from "react";
import api from "@/utils/api.js";

export default function Bookings() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detail, setDetail] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/admin/tasks", {
        params: { limit: 40, status: status || undefined },
      });
      setTasks(data.tasks || []);
    } catch (e) {
      setError(e?.response?.data?.error || e.message);
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-gray-900">Bookings / Tasks</h2>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
        >
          <option value="">All statuses</option>
          <option value="posted">Posted</option>
          <option value="booked">Booked</option>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
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
                <th className="px-4 py-3">Task</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tasks.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-3 font-medium text-gray-900">{t.title || t.id}</td>
                  <td className="px-4 py-3">{t.status}</td>
                  <td className="px-4 py-3">{t.budget != null ? `$${t.budget}` : "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      className="text-blue-600 hover:underline"
                      onClick={async () => {
                        try {
                          const { data } = await api.get(`/admin/tasks/${t.id}/booking`);
                          setDetail(data);
                        } catch (e) {
                          setDetail({ error: e?.response?.data?.error || e.message });
                        }
                      }}
                    >
                      Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {detail ? (
        <div className="fixed inset-0 z-40 flex justify-end bg-black/40 p-4">
          <div className="flex h-full max-w-xl flex-col rounded-xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h4 className="font-semibold">Task booking</h4>
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
