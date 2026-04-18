import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminGuard from "@/guards/AdminGuard.jsx";
import AdminLayout from "@/layouts/AdminLayout.jsx";
import Login from "@/pages/Login.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Providers from "@/pages/Providers.jsx";
import Customers from "@/pages/Customers.jsx";
import Bookings from "@/pages/Bookings.jsx";
import Payments from "@/pages/Payments.jsx";
import Reviews from "@/pages/Reviews.jsx";
import Disputes from "@/pages/Disputes.jsx";
import Settings from "@/pages/Settings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AdminGuard />}>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/disputes" element={<Disputes />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
