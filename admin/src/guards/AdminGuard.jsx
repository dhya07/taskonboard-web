import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { auth } from "@/config/firebase.js";

function hasAdminClaim(claims) {
  const roles = claims?.roles;
  return Array.isArray(roles) && roles.includes("admin");
}

export default function AdminGuard() {
  const { t } = useTranslation();
  const location = useLocation();
  const [state, setState] = useState({ status: "loading", ok: false });

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState({ status: "ready", ok: false });
        return;
      }
      try {
        const token = await user.getIdTokenResult(true);
        setState({ status: "ready", ok: hasAdminClaim(token.claims) });
      } catch {
        setState({ status: "ready", ok: false });
      }
    });
  }, []);

  if (state.status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-600">
        {t("common.loading")}
      </div>
    );
  }

  if (!auth.currentUser || !state.ok) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
