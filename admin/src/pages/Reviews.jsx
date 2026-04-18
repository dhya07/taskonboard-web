import { useCallback, useEffect, useState } from "react";
import api from "@/utils/api.js";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const path =
        status === "all" ? "/reviews/admin/all" : `/reviews/admin/status/${status}`;
      const { data } = await api.get(path, { params: { limit: 50, page: 1 } });
      setReviews(data.data?.reviews || []);
    } catch (e) {
      setError(e?.response?.data?.message || e.message);
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    void load();
  }, [load]);

  async function moderate(id, providerId, next) {
    try {
      await api.patch(`/reviews/admin/${id}/moderate`, { status: next, reason: "Admin moderation" });
      await load();
    } catch (e) {
      setError(e?.response?.data?.message || e.message);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
        {["all", "pending", "approved", "rejected"].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`rounded-lg px-3 py-1.5 text-sm capitalize ${
              status === s ? "bg-gray-900 text-white" : "border border-gray-200 bg-white"
            }`}
          >
            {s}
          </button>
        ))}
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
                <th className="px-4 py-3">Provider</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Comment</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reviews.map((r) => (
                <tr key={`${r.providerId}-${r.id}`}>
                  <td className="px-4 py-3">{r.providerName}</td>
                  <td className="px-4 py-3">{r.rating}</td>
                  <td className="px-4 py-3">{r.status}</td>
                  <td className="max-w-xs truncate px-4 py-3">{r.comment || r.reviewText || "—"}</td>
                  <td className="space-x-2 px-4 py-3 text-right">
                    {r.status === "pending" ? (
                      <>
                        <button
                          type="button"
                          className="text-emerald-600 hover:underline"
                          onClick={() => void moderate(r.id, r.providerId, "approved")}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="text-red-600 hover:underline"
                          onClick={() => void moderate(r.id, r.providerId, "rejected")}
                        >
                          Reject
                        </button>
                      </>
                    ) : null}
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
