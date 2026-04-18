import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "@/config/firebase.js";
import { setAdminLocale } from "@/i18n/index.js";

export default function Topbar({ title }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const envName = import.meta.env.VITE_ENV_NAME || "";
  const isProd = import.meta.env.PROD;
  const modeLabel = envName || (isProd ? "Production" : "Development");

  async function handleLogout() {
    await signOut(auth);
    navigate("/login", { replace: true });
  }

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      <div className="flex items-center gap-3">
        <label className="sr-only" htmlFor="locale">
          {t("common.language")}
        </label>
        <select
          id="locale"
          value={i18n.language}
          onChange={(e) => setAdminLocale(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-700"
        >
          <option value="en-CA">English (CA)</option>
          <option value="fr-CA">Français (CA)</option>
        </select>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            isProd ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"
          }`}
        >
          {modeLabel}
        </span>
        <button
          type="button"
          onClick={() => void handleLogout()}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {t("nav.logout")}
        </button>
      </div>
    </header>
  );
}
