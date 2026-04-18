import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/Sidebar.jsx";
import Topbar from "@/components/Topbar.jsx";
import { useTranslation } from "react-i18next";

const titles = {
  "/": "nav.dashboard",
  "/providers": "nav.providers",
  "/customers": "nav.customers",
  "/bookings": "nav.bookings",
  "/payments": "nav.payments",
  "/reviews": "nav.reviews",
  "/disputes": "nav.disputes",
  "/settings": "nav.settings",
};

export default function AdminLayout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const titleKey = titles[pathname] || "nav.dashboard";
  const title = t(titleKey);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
