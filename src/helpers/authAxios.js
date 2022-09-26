import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const token = JSON.parse(localStorage.getItem("jwt"));
export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
