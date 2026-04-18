import { useEffect, useState } from "react";
import api from "@/utils/api.js";

export default function Settings() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let c = false;
    (async () => {
      try {
        const res = await api.get("/admin/settings");
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
    <div className="max-w-2xl space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
      <p className="text-sm text-gray-500">
        Feature flags are read from server configuration. Runtime toggles require a Firestore config document (not
        enabled here).
      </p>
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-900">Environment</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">NODE_ENV</dt>
            <dd className="font-mono text-gray-800">{data.env?.nodeEnv}</dd>
          </div>
        </dl>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-900">Feature flags (read-only)</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {Object.entries(data.featureFlags || {}).map(([k, v]) => (
            <li key={k} className="flex justify-between">
              <span className="text-gray-600">{k}</span>
              <span className="font-medium text-gray-900">{String(v)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
