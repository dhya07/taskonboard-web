import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from "@/config/firebase.js";

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-gray-100 text-gray-900"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  }`;

export default function Sidebar() {
  const { t } = useTranslation();
  const user = auth.currentUser;

  const items = [
    { to: "/", labelKey: "nav.dashboard", end: true },
    { to: "/providers", labelKey: "nav.providers" },
    { to: "/customers", labelKey: "nav.customers" },
    { to: "/bookings", labelKey: "nav.bookings" },
    { to: "/payments", labelKey: "nav.payments" },
    { to: "/reviews", labelKey: "nav.reviews" },
    { to: "/disputes", labelKey: "nav.disputes" },
    { to: "/settings", labelKey: "nav.settings" },
  ];

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-5 py-6">
        <div className="text-lg font-semibold tracking-tight text-gray-900">
          {t("app.name")}
        </div>
        <p className="mt-1 text-xs text-gray-500">TaskOnBoard · CA</p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-3">
        {items.map(({ to, labelKey, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClass}>
            <span>{t(labelKey)}</span>
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-gray-100 p-4">
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
          <p className="truncate text-sm font-medium text-gray-900">
            {user?.displayName || user?.email || "—"}
          </p>
          <p className="truncate text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>
    </aside>
  );
}
