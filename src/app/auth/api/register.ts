import { storage } from "./../../utils/storage";

import { useMutation } from "react-query";
import { axios } from "../../lib/axios";

import { registerDto } from "../types";

export const register = (data: registerDto) => axios.post("auth/register", data);
export const useRegister = () => {
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: register,
    onSuccess: (data) => {
        storage.setToken(data?.data?.token)
        storage.setUser(data?.data?.user)
       data?.data ? (location.href = "app/dashboard") : (location.href = "auth/register");
    }
  });
};
