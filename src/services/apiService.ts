import axios from "axios";
import { toast } from "react-hot-toast";
import SessionStorageKeysEnum from "../shared/utils/enums/SessionStorageKeysEnum";

export const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const setRequestInterceptor = (): void => {
  apiService.interceptors.request.use((config) => {
    const accessToken = sessionStorage.getItem(SessionStorageKeysEnum.TOKEN);
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

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config.url === "/auth/login") {
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

        sessionStorage.removeItem(SessionStorageKeysEnum.TOKEN);
        cleanRequestInterceptor();
        toast.dismiss();
        toast.error(
          "Tu sesión ha caducado. Te redireccionaremos en 3 segundos"
        );
        setTimeout(() => {
          window.location.assign("/");
        }, 3000);
      }
      reject(error);
    });
  }
);
