import Axios, { AxiosRequestConfig } from "axios";

import config from "../config/index";
import { storage } from "../utils";

const authRequestInterceptor = (conf: AxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    (conf.headers as any).authorization = `Bearer ${token}`;

  }
  (conf.headers as any).Accept = "application/json";
  return conf;
};

export const axios = Axios.create({
  baseURL: config.API_URL,
  headers: {
    "Bypass-Tunnel-Reminder": "Bypass-Tunnel-Reminde",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  }
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    let message;
    switch (error?.response?.status) {
      case 401:
        message = "Invalid credentials";
        storage.clearToken();
        storage.clearUser();
        window.location.href = "/auth/login";
        break;
      case 400:
      case 404:
        return Promise.reject(error);
      default:
        message =
          error.response && error.response.data
            ? error.response.data["message"]
            : error.message || error;
        break;
    }
    return Promise.reject(message);
  }
);
