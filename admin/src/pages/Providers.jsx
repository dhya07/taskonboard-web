import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "@/utils/api.js";

const DETAIL_TABS = [
  "summary",
  "profile",
  "services",
  "stripe",
  "application",
  "bankingAudit",
  "client",
  "raw",
];

const APP_CHECKS = [
  "profileComplete",
  "documentsUploaded",
  "addressValid",
  "stripeConnected",
];

function formatName(p) {
  const u = p.userInfo || {};
  const pd =
    u.personalDetails ||
    p.personalDetails ||
    p.personalInfo ||
    p.application?.personalInfo ||
    {};
  const first = pd.firstName || p.firstName || p.personalInfo?.firstName || "";
  const last = pd.lastName || p.lastName || p.personalInfo?.lastName || "";
  const name = `${first} ${last}`.trim();
  if (name) return name;
  return u.email || p.businessInfo?.businessName || p.businessInfo?.legalName || p.uid || "—";
}

function formatEmail(p) {
  return p.userInfo?.email || p.personalInfo?.email || p.businessInfo?.email || p.email || "—";
}

function formatPhone(p) {
  const a =
    p.personalInfo?.phoneNumber ||
    p.businessInfo?.phoneNumber ||
    p.userInfo?.phoneNumber ||
    p.application?.personalInfo?.phoneNumber;
  return a || "—";
}

function businessLabel(p) {
  return (
    p.businessInfo?.legalName ||
    p.businessInfo?.businessName ||
    p.serviceDetails?.title ||
    "—"
  );
}

function isPending(p) {
  const s = p.status || p.application?.status;
  return s === "pending" || s === "submitted" || p.application?.status === "submitted";
}

function isRejected(p) {
  return (p.status || "") === "rejected" || p.application?.status === "rejected";
}

function truncateUid(uid) {
  if (!uid || uid.length < 12) return uid || "—";
  return `${uid.slice(0, 6)}…${uid.slice(-4)}`;
}

/** Firestore Timestamp shapes from Admin SDK / JSON transport */
function tryDecodeFirestoreTime(v) {
  if (!v || typeof v !== "object") return null;
  const sec = v.seconds ?? v._seconds;
  if (typeof sec !== "number") return null;
  const ns = v.nanoseconds ?? v._nanoseconds ?? 0;
  return new Date(sec * 1000 + ns / 1e6).toISOString();
}

function formatCellValue(v) {
  if (v === undefined || v === null) return "—";
  if (typeof v === "boolean") return v ? "true" : "false";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (v instanceof Date) return v.toISOString();
  const iso = tryDecodeFirestoreTime(v);
  if (iso) return iso;
  if (typeof v === "object") return safeJson(v, 0);
  return String(v);
}

function safeJson(value, space = 2) {
  try {
    return JSON.stringify(
      value,
      (_, v) => {
        if (v instanceof Date) return v.toISOString();
        if (typeof v === "bigint") return v.toString();
        const iso = tryDecodeFirestoreTime(v);
        if (iso) return iso;
        return v;
      },
      space,
    );
  } catch {
    return String(value);
  }
}

function addressFieldRows(addr) {
  if (!addr || typeof addr !== "object") return [];
  const order = [
    "street",
    "city",
    "region",
    "province",
    "postalCode",
    "country",
    "fullAddress",
    "latitude",
    "longitude",
    "apartment",
    "placeId",
  ];
  return order
    .filter((k) => addr[k] !== undefined && addr[k] !== null && addr[k] !== "")
    .map((k) => [k, String(addr[k])]);
}

/** Pairs statusChangedAt_* with statusChangedBy_* (same suffix). */
function statusAuditRows(detail) {
  if (!detail || typeof detail !== "object") return [];
  const rows = [];
  for (const key of Object.keys(detail)) {
    const m = key.match(/^statusChangedAt_(.+)$/);
    if (!m) continue;
    const suffix = m[1];
    const at = formatCellValue(detail[key]);
    const byKey = `statusChangedBy_${suffix}`;
    const by = detail[byKey] != null ? String(detail[byKey]) : "—";
    rows.push([`${key} / ${byKey}`, `${at} — by ${by}`]);
  }
  return rows.sort(([a], [b]) => a.localeCompare(b));
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

function downloadJson(filename, obj) {
  const blob = new Blob([safeJson(obj, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function FieldGrid({ rows }) {
  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2">
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{k}</dt>
          <dd className="mt-1 wrap-break-word text-sm text-gray-900">{v === undefined || v === null || v === "" ? "—" : String(v)}</dd>
        </div>
      ))}
    </dl>
  );
}

function JsonBlock({ value, className = "" }) {
  return (
    <pre
      className={`max-h-[min(70vh,520px)] overflow-auto rounded-lg border border-gray-200 bg-gray-950 p-3 text-xs text-gray-100 ${className}`}
    >
      {safeJson(value, 2)}
    </pre>
  );
}

/** Nested `url` / *Url string fields under documents (selfie, idCard, etc.). */
function collectDocumentMediaFields(documents) {
  const out = [];
  if (!documents || typeof documents !== "object") return out;
  const walk = (obj, prefix) => {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) return;
    for (const [k, v] of Object.entries(obj)) {
      const fieldPath = prefix ? `${prefix}.${k}` : k;
      if (typeof v === "string" && (k === "url" || k.endsWith("Url"))) {
        out.push({ fieldPath, uri: v });
      } else if (v && typeof v === "object" && !Array.isArray(v)) {
        walk(v, fieldPath);
      }
    }
  };
  walk(documents, "documents");
  return out;
}

function ProviderDocumentsPanel({ documents, t }) {
  const items = collectDocumentMediaFields(documents || {});
  if (items.length === 0) {
    return <p className="mb-3 text-sm text-gray-500">{t("providers.documentsNoImageFields")}</p>;
  }
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2">
      {items.map(({ fieldPath, uri }) => (
        <div key={fieldPath} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
          <p className="mb-2 font-mono text-xs text-gray-500">{fieldPath}</p>
          {uri.startsWith("https://") || uri.startsWith("http://") ? (
            <a href={uri} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={uri}
                alt=""
                className="max-h-72 w-full rounded-md border border-gray-100 bg-gray-50 object-contain"
              />
            </a>
          ) : uri.startsWith("file:") ? (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
              {t("providers.documentsFileUrlBody")}
            </div>
          ) : (
            <p className="wrap-break-word font-mono text-xs text-gray-800">{uri}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Providers() {
  const { t } = useTranslation();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [detail, setDetail] = useState(null);
  const [detailTab, setDetailTab] = useState("summary");
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [rejectOpen, setRejectOpen] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [actionBusy, setActionBusy] = useState("");
  const [copyFlash, setCopyFlash] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/admin/providers");
      const list = data.providers || [];
      setProviders(list);
      return list;
    } catch (e) {
      setError(e?.response?.data?.error || e.message || "Failed to load");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  /** Keep drawer in sync with list payload after mutations (no GET /providers/:id required). */
  const syncDetailFromList = useCallback((list, uid) => {
    if (!list?.length || !uid) return;
    setDetail((d) => {
      if (!d || d.uid !== uid) return d;
      const row = list.find((p) => p.uid === uid);
      return row || d;
    });
  }, []);

  /** Optional: GET single doc when backend exposes /api/admin/providers/:id (fresher than list). */
  const refreshDetailFromServer = useCallback(async (uid) => {
    if (!uid) return;
    setDetailLoading(true);
    setDetailError("");
    try {
      const { data } = await api.get(`/admin/providers/${uid}`);
      if (data?.provider) setDetail(data.provider);
    } catch (e) {
      const status = e?.response?.status;
      const serverMsg = e?.response?.data?.error;
      if (status === 404) {
        if (serverMsg === "Provider not found") {
          setDetailError(t("providers.detail404NotFound"));
        } else {
          setDetailError(t("providers.detail404Route"));
        }
      } else {
        setDetailError(serverMsg || e.message || t("providers.detailLoadError"));
      }
    } finally {
      setDetailLoading(false);
    }
  }, [t]);

  const openDetail = useCallback((p) => {
    setDetail(p);
    setDetailTab("summary");
    setDetailError("");
  }, []);

  const pendingTop = useMemo(() => {
    return providers.filter(isPending).slice(0, 3);
  }, [providers]);

  const filtered = useMemo(() => {
    let list = providers;
    if (filter === "pending") list = list.filter(isPending);
    else if (filter === "approved") list = list.filter((p) => (p.status || "") === "approved");
    else if (filter === "suspended") list = list.filter((p) => (p.status || "") === "suspended");
    else if (filter === "rejected") list = list.filter(isRejected);

    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter((p) => {
      const hay = [
        p.uid,
        formatEmail(p),
        formatName(p),
        formatPhone(p),
        businessLabel(p),
        p.stripeAccountId,
        p.status,
        p.application?.status,
        p.role,
        p.activeRole,
        p.bankingInfo?.accountNumberLast4,
        p.bankingInfo?.stripeExternalAccountId,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [providers, filter, searchQuery]);

  async function approve(id) {
    setActionBusy(id + "-approve");
    try {
      await api.put(`/admin/providers/${id}/approve`);
      const list = await load();
      syncDetailFromList(list, id);
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
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function changeStatus(id, status) {
    setActionBusy(id + status);
    try {
      await api.put(`/admin/providers/${id}/change-status`, { status });
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function refreshStripe(id) {
    setActionBusy(id + "-stripe");
    try {
      await api.post(`/admin/providers/${id}/refresh-stripe-status`);
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function markReviewed(id) {
    setActionBusy(id + "-reviewed");
    try {
      await api.put(`/admin/providers/${id}/mark-reviewed`);
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function updateCheck(id, checkName, value) {
    setActionBusy(id + "-check-" + checkName);
    try {
      await api.put(`/admin/providers/${id}/update-check`, { checkName, value });
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function manualVerifyIdentity(id) {
    if (!window.confirm(t("providers.confirmManualVerify"))) return;
    setActionBusy(id + "-verify");
    try {
      await api.put(`/admin/providers/${id}/verify-identity`);
      const list = await load();
      syncDetailFromList(list, id);
    } finally {
      setActionBusy("");
    }
  }

  async function handleCopy(label, text) {
    const ok = await copyToClipboard(text);
    setCopyFlash(ok ? label : "");
    setTimeout(() => setCopyFlash(""), 2000);
  }

  const stripeDashboardUrl = detail?.stripeAccountId
    ? `https://dashboard.stripe.com/connect/accounts/${detail.stripeAccountId}`
    : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{t("providers.title")}</h2>
          <p className="text-sm text-gray-500">{t("providers.subtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["all", "pending", "approved", "suspended", "rejected"].map((f) => (
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
              {t(`providers.filters.${f}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          className="min-w-[220px] flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder={t("providers.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={t("providers.searchPlaceholder")}
        />
        <button
          type="button"
          onClick={() => void load()}
          disabled={loading}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          {t("providers.reloadList")}
        </button>
        {copyFlash ? (
          <span className="text-sm text-emerald-600">{t("providers.copied", { what: copyFlash })}</span>
        ) : null}
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
                  <p className="font-mono text-xs text-gray-400">{truncateUid(p.uid)}</p>
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
                    onClick={() => openDetail(p)}
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
          <div className="p-8 text-center text-gray-500">{t("common.loading")}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">{t("providers.columns.name")}</th>
                  <th className="px-4 py-3">{t("providers.columns.uid")}</th>
                  <th className="px-4 py-3">{t("providers.columns.email")}</th>
                  <th className="px-4 py-3">{t("providers.columns.phone")}</th>
                  <th className="px-4 py-3">{t("providers.columns.business")}</th>
                  <th className="px-4 py-3">{t("providers.columns.status")}</th>
                  <th className="px-4 py-3">{t("providers.columns.stripe")}</th>
                  <th className="px-4 py-3 text-right">{t("providers.columns.actions")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((p) => (
                  <tr key={p.uid} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{formatName(p)}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{truncateUid(p.uid)}</td>
                    <td className="max-w-[200px] truncate px-4 py-3 text-gray-600" title={formatEmail(p)}>
                      {formatEmail(p)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-600">{formatPhone(p)}</td>
                    <td className="max-w-[180px] truncate px-4 py-3 text-gray-600" title={businessLabel(p)}>
                      {businessLabel(p)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                        {p.status || p.application?.status || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {p.stripeAccountStatus?.charges_enabled ? t("providers.stripeChargesOn") : "—"}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        type="button"
                        className="mr-2 text-blue-600 hover:underline"
                        onClick={() => openDetail(p)}
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
        <div className="fixed inset-0 z-40 flex justify-end bg-black/40 p-2 sm:p-4">
          <div className="flex h-full w-full max-w-5xl flex-col rounded-xl bg-white shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-4 py-3">
              <div>
                <h4 className="font-semibold text-gray-900">{t("providers.detailTitle")}</h4>
                <p className="text-sm text-gray-600">{formatName(detail)}</p>
                <p className="font-mono text-xs text-gray-500">{detail.uid}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 px-2 py-1 text-xs font-medium hover:bg-gray-50"
                  onClick={() => void handleCopy("UID", detail.uid)}
                >
                  {t("providers.copyUid")}
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 px-2 py-1 text-xs font-medium hover:bg-gray-50"
                  onClick={() => void handleCopy("email", formatEmail(detail))}
                >
                  {t("providers.copyEmail")}
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 px-2 py-1 text-xs font-medium hover:bg-gray-50"
                  onClick={() => downloadJson(`provider-${detail.uid}.json`, detail)}
                >
                  {t("providers.downloadJson")}
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-200 px-2 py-1 text-xs font-medium hover:bg-gray-50"
                  onClick={() => void handleCopy("JSON", safeJson(detail, 2))}
                >
                  {t("providers.copyFullJson")}
                </button>
                <button type="button" className="text-gray-500 hover:text-gray-800" onClick={() => setDetail(null)}>
                  ✕
                </button>
              </div>
            </div>

            {detailLoading ? (
              <div className="border-b border-amber-100 bg-amber-50 px-4 py-2 text-sm text-amber-900">{t("providers.detailRefreshing")}</div>
            ) : null}
            {detailError ? (
              <div className="border-b border-red-100 bg-red-50 px-4 py-2 text-sm text-red-800">{detailError}</div>
            ) : null}

            <div className="flex flex-wrap gap-1 border-b border-gray-100 px-2 py-2">
              {DETAIL_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setDetailTab(tab)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize sm:text-sm ${
                    detailTab === tab ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {t(`providers.tabs.${tab}`)}
                </button>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-auto p-4 text-sm">
              {detailTab === "summary" ? (
                <div className="space-y-6">
                  <FieldGrid
                    rows={[
                      [t("providers.fields.role"), detail.role ?? "—"],
                      [t("providers.fields.activeRole"), detail.activeRole ?? "—"],
                      [t("providers.fields.accountStatus"), detail.status || "—"],
                      [t("providers.fields.applicationStatus"), detail.application?.status || "—"],
                      [t("providers.fields.submittedBy"), detail.application?.submittedBy ?? "—"],
                      [t("providers.fields.onboardingStep"), detail.onboardingStep ?? "—"],
                      [t("providers.fields.onboardingCompleted"), String(!!detail.onboardingCompleted)],
                      [t("providers.fields.onboardingStartedAt"), formatCellValue(detail.onboardingStartedAt)],
                      [t("providers.fields.identityVerification"), detail.identityVerificationStatus || "—"],
                      [t("providers.fields.rejectionReason"), detail.rejectionReason || "—"],
                      [t("providers.fields.appliedAt"), formatCellValue(detail.appliedAt)],
                      [t("providers.fields.approvedAt"), formatCellValue(detail.approvedAt)],
                      [t("providers.fields.approvedBy"), detail.approvedBy ?? "—"],
                      [t("providers.fields.updatedAt"), formatCellValue(detail.updatedAt)],
                      [t("providers.fields.isLoading"), String(!!detail.isLoading)],
                      [t("providers.fields.stripeAccountId"), detail.stripeAccountId || "—"],
                      [t("providers.fields.lastStripeSync"), formatCellValue(detail.lastStripeSync)],
                    ]}
                  />
                  <div className="flex flex-wrap gap-2">
                    {stripeDashboardUrl ? (
                      <a
                        href={stripeDashboardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        {t("providers.openStripeDashboard")}
                      </a>
                    ) : null}
                    <button
                      type="button"
                      disabled={!!actionBusy}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                      onClick={() => void refreshStripe(detail.uid)}
                    >
                      {t("providers.refreshStripe")}
                    </button>
                    <button
                      type="button"
                      disabled={!!actionBusy}
                      className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                      onClick={() => void refreshDetailFromServer(detail.uid)}
                    >
                      {t("providers.reloadRecord")}
                    </button>
                  </div>
                </div>
              ) : null}

              {detailTab === "profile" ? (
                <div className="space-y-6">
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.personalInfo")}</h5>
                    {detail.personalInfo?.profilePicture ? (
                      <div className="mb-3">
                        <p className="mb-1 text-xs text-gray-500">{t("providers.personalProfilePhoto")}</p>
                        <img
                          src={detail.personalInfo.profilePicture}
                          alt=""
                          className="h-32 w-32 rounded-lg border border-gray-200 object-cover"
                        />
                      </div>
                    ) : null}
                    <JsonBlock value={detail.personalInfo || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.businessInfo")}</h5>
                    <JsonBlock value={detail.businessInfo || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.address")}</h5>
                    {addressFieldRows(detail.address).length > 0 ? (
                      <div className="mb-3">
                        <FieldGrid rows={addressFieldRows(detail.address)} />
                      </div>
                    ) : null}
                    <JsonBlock value={detail.address || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.safetyChecklist")}</h5>
                    <JsonBlock value={detail.safetyChecklist || {}} />
                  </section>
                </div>
              ) : null}

              {detailTab === "services" ? (
                <div className="space-y-6">
                  {detail.personalInfo?.profilePicture && !detail.media?.profilePicture ? (
                    <section>
                      <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.personalProfilePhoto")}</h5>
                      <img
                        src={detail.personalInfo.profilePicture}
                        alt=""
                        className="h-32 w-32 rounded-lg border border-gray-200 object-cover"
                      />
                    </section>
                  ) : null}
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.serviceDetails")}</h5>
                    <JsonBlock value={detail.serviceDetails || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.media")}</h5>
                    {detail.media?.profilePicture ? (
                      <div className="mb-3">
                        <p className="mb-1 text-xs text-gray-500">{t("providers.profilePhoto")}</p>
                        <img
                          src={detail.media.profilePicture}
                          alt=""
                          className="h-32 w-32 rounded-lg border border-gray-200 object-cover"
                        />
                      </div>
                    ) : null}
                    <JsonBlock value={detail.media || {}} />
                  </section>
                </div>
              ) : null}

              {detailTab === "stripe" ? (
                <div className="space-y-4">
                  <FieldGrid
                    rows={[
                      ["stripeAccountId", detail.stripeAccountId || "—"],
                      ["charges_enabled", String(!!detail.stripeAccountStatus?.charges_enabled)],
                      ["payouts_enabled", String(!!detail.stripeAccountStatus?.payouts_enabled)],
                      ["details_submitted", String(!!detail.stripeAccountStatus?.details_submitted)],
                      [
                        "disabled_reason",
                        detail.stripeAccountStatus?.disabled_reason != null
                          ? String(detail.stripeAccountStatus.disabled_reason)
                          : "—",
                      ],
                    ]}
                  />
                  <JsonBlock value={detail.stripeAccountStatus || {}} />
                  <h5 className="text-xs font-bold uppercase text-gray-500">stripeIdentity</h5>
                  <JsonBlock value={detail.stripeIdentity || {}} />
                </div>
              ) : null}

              {detailTab === "application" ? (
                <div className="space-y-6">
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.applicationMetaTitle")}</h5>
                    <FieldGrid
                      rows={[
                        ["application.status", detail.application?.status ?? "—"],
                        ["application.submittedBy", detail.application?.submittedBy ?? "—"],
                        ["application.completedAt", formatCellValue(detail.application?.completedAt)],
                        ["application.readyForReview", String(!!detail.application?.readyForReview)],
                        ["application.review.required", String(!!detail.application?.review?.required)],
                        ["application.review.reviewed", String(!!detail.application?.review?.reviewed)],
                        ["application.review.reviewedAt", formatCellValue(detail.application?.review?.reviewedAt)],
                        ["application.review.reviewedBy", detail.application?.review?.reviewedBy ?? "—"],
                      ]}
                    />
                  </section>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h5 className="mb-3 text-sm font-semibold text-gray-900">{t("providers.adminTools")}</h5>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={!!actionBusy}
                        onClick={() => void markReviewed(detail.uid)}
                        className="rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-white hover:bg-gray-900 disabled:opacity-50"
                      >
                        {t("providers.markReviewed")}
                      </button>
                      <button
                        type="button"
                        disabled={!!actionBusy}
                        onClick={() => void manualVerifyIdentity(detail.uid)}
                        className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100 disabled:opacity-50"
                      >
                        {t("providers.manualVerifyIdentity")}
                      </button>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">{t("providers.adminToolsHint")}</p>
                  </div>
                  <div>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.applicationChecks")}</h5>
                    <ul className="space-y-2">
                      {APP_CHECKS.map((name) => (
                        <li key={name} className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2">
                          <span className="font-mono text-xs text-gray-700">{name}</span>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={!!detail.application?.checks?.[name]}
                              disabled={!!actionBusy}
                              onChange={(e) => void updateCheck(detail.uid, name, e.target.checked)}
                            />
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.sections.application")}</h5>
                    <JsonBlock value={detail.application || {}} />
                  </div>
                </div>
              ) : null}

              {detailTab === "bankingAudit" ? (
                <div className="space-y-6">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
                    {t("providers.bankingSensitiveBanner")}
                  </div>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">bankingInfo</h5>
                    <JsonBlock value={detail.bankingInfo || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">legalConfirmations</h5>
                    <JsonBlock value={detail.legalConfirmations || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">documents</h5>
                    <p className="mb-2 text-xs text-gray-600">{t("providers.documentsUrlHint")}</p>
                    <ProviderDocumentsPanel documents={detail.documents} t={t} />
                    <h6 className="mb-1 text-xs font-bold uppercase text-gray-400">{t("providers.documentsRawTitle")}</h6>
                    <JsonBlock value={detail.documents || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">submissionAttempt</h5>
                    <JsonBlock value={detail.submissionAttempt || {}} />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">submissionLock</h5>
                    <JsonBlock
                      value={
                        detail.submissionLock === undefined
                          ? { _note: "Field not present on provider document" }
                          : detail.submissionLock
                      }
                    />
                  </section>
                  <section>
                    <h5 className="mb-2 text-xs font-bold uppercase text-gray-500">{t("providers.statusAuditTitle")}</h5>
                    {statusAuditRows(detail).length > 0 ? (
                      <FieldGrid rows={statusAuditRows(detail)} />
                    ) : (
                      <p className="text-sm text-gray-500">—</p>
                    )}
                  </section>
                </div>
              ) : null}

              {detailTab === "client" ? (
                <div>
                  <p className="mb-2 text-xs text-gray-500">{t("providers.clientDocHint")}</p>
                  <JsonBlock value={detail.userInfo || {}} />
                </div>
              ) : null}

              {detailTab === "raw" ? (
                <div>
                  <p className="mb-2 text-xs text-gray-500">{t("providers.rawHint")}</p>
                  <JsonBlock value={detail} />
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-gray-100 p-4">
              {isPending(detail) ? (
                <>
                  <button
                    type="button"
                    disabled={!!actionBusy}
                    className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
                    onClick={() => void approve(detail.uid)}
                  >
                    {t("providers.approve")}
                  </button>
                  <button
                    type="button"
                    disabled={!!actionBusy}
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-800 hover:bg-red-100 disabled:opacity-50"
                    onClick={() => {
                      setRejectOpen(detail.uid);
                      setRejectReason("");
                    }}
                  >
                    {t("providers.reject")}
                  </button>
                </>
              ) : null}
              {(detail.status === "approved" || detail.status === "active") && detail.status !== "suspended" ? (
                <button
                  type="button"
                  disabled={!!actionBusy}
                  className="rounded-lg border border-amber-200 px-3 py-2 text-sm font-medium text-amber-900 hover:bg-amber-50 disabled:opacity-50"
                  onClick={() => void changeStatus(detail.uid, "suspended")}
                >
                  {t("providers.suspend")}
                </button>
              ) : null}
              {detail.status === "suspended" ? (
                <button
                  type="button"
                  disabled={!!actionBusy}
                  className="rounded-lg border border-emerald-200 px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50 disabled:opacity-50"
                  onClick={() => void changeStatus(detail.uid, "active")}
                >
                  {t("providers.unsuspend")}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
