import axios from "axios";

const api = axios.create({
  baseURL: "https://fitness.elevateegy.com/api/v1",
  timeout: 10000,
});

/**
 * Request Interceptor
 * يضيف التوكن تلقائي لو موجود
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * Response Interceptor (اختياري)
 * يلقط 401 global
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized – token expired or invalid");
    }

    return Promise.reject(error);
  },
);

export default api;
