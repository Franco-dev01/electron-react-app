import { axios } from "../../lib/axios";

import { LoginDto } from "../types";

export const login = (data: LoginDto) => {
  return axios.post("login", data);
};
