import axios from "axios";
import { auth } from "@/config/firebase.js";

// Prefer VITE_API_URL; VITE_API_BASE_URL kept as fallback for older .env files
const baseURL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "https://taskonboard-backend.onrender.com/api";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
