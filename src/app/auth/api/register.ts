import { useMutation } from "react-query";
import { axios } from "../../lib/axios";

import { registerDto } from "../types";

export const register = (data: registerDto) => {
  return axios.post("/user", data).then((response) => response.data);
};

export const useRegister = () => {
    return useMutation(register);
}
