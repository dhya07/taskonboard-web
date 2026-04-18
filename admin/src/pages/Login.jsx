import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { auth } from "@/config/firebase.js";

function hasAdminClaim(claims) {
  const roles = claims?.roles;
  return Array.isArray(roles) && roles.includes("admin");
}

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (!u) return;
      try {
        const token = await u.getIdTokenResult(true);
        if (hasAdminClaim(token.claims)) {
          navigate(from, { replace: true });
        } else {
          await signOut(auth);
        }
      } catch {
        await signOut(auth);
      }
    });
  }, [navigate, from]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      const token = await cred.user.getIdTokenResult(true);
      if (!hasAdminClaim(token.claims)) {
        await signOut(auth);
        setError(t("login.notAdmin"));
        return;
      }
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.message || t("login.error"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">{t("login.title")}</h1>
        <p className="mt-1 text-sm text-gray-500">{t("login.subtitle")}</p>
        <form className="mt-8 space-y-4" onSubmit={(e) => void handleSubmit(e)}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              {t("login.email")}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 outline-none ring-blue-500 focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              {t("login.password")}
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-900 outline-none ring-blue-500 focus:ring-2"
              required
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {busy ? "…" : t("login.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
