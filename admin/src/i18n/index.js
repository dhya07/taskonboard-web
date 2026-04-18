import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCA from "./locales/en-CA.json";
import frCA from "./locales/fr-CA.json";

const STORAGE_KEY = "tob-admin-locale";

const saved =
  typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
const lng = saved === "fr-CA" || saved === "en-CA" ? saved : "en-CA";

void i18n.use(initReactI18next).init({
  resources: {
    "en-CA": { translation: enCA },
    "fr-CA": { translation: frCA },
  },
  lng,
  fallbackLng: "en-CA",
  interpolation: { escapeValue: false },
});

export function setAdminLocale(code) {
  localStorage.setItem(STORAGE_KEY, code);
  void i18n.changeLanguage(code);
}

export default i18n;
