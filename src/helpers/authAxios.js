import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_API_URL;

export const authAxios = axios.create({
  baseURL: baseUrl,
});

authAxios.interceptors.request.use((config) => {
  const jwtJson = localStorage.getItem("jwt");
  const token = jwtJson !== null ? JSON.parse(jwtJson) : "";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
