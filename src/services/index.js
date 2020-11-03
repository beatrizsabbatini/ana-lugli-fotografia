import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use(async config => {
  const token = await localStorage.getItem('token');
  let headers = { ...config.headers };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
