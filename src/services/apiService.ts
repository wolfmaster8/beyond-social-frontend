import axios from "axios";
import { toast } from "react-hot-toast";
import SessionStorageKeysEnum from "../shared/utils/enums/SessionStorageKeysEnum";

export const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config.url === "/users/login") {
      throw error;
    }
    return new Promise((resolve, reject) => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        originalRequest.__isRetryRequest = true;

        sessionStorage.removeItem(SessionStorageKeysEnum.token);
        cleanRequestInterceptor();
        if (window.location.pathname.split("/")[1] === "user") {
          toast.dismiss();
          toast.error(
            "Tu sesión ha caducado. Te redireccionaremos en 3 segundos"
          );
          setTimeout(() => {
            window.location.assign("/");
          }, 3000);
        } else {
          toast.error("Tu sesión ha caducado. Inicia sesión nuevamente.");
        }
      }
      reject(error);
    });
  }
);

export const setRequestInterceptor = (): void => {
  apiService.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem(SessionStorageKeysEnum.token);
    const newConfig = { ...config };
    if (newConfig.headers) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
      newConfig.headers["Content-Type"] = "application/json";
    }
    return newConfig;
  });
};

export const cleanRequestInterceptor = () => {
  apiService.interceptors.request.use((config) => {
    const newConfig = { ...config };
    if (newConfig.headers) {
      newConfig.headers.Authorization = "";
      newConfig.headers["Content-Type"] = "application/json";
    }
    return newConfig;
  });
};
