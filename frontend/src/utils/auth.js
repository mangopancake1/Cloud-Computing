import axios from "axios";

const api = axios.create({
  baseURL: "https://notes-backend141-637581838712.us-central1.run.app", // atau URL backend kamu yang valid
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
