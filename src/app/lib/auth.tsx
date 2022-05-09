import { AuthProviderConfig, initReactQueryAuth } from "react-query-auth";

import { storage } from "./../utils/storage";
import { login } from "../auth/api/login";
import CustomizedProgressBars from "../../app/components/loanding";
import { QueryCache } from "react-query";

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};

interface Error {
  message: string;
}

const queryCache = new QueryCache();


async function handleUserResponse(data: any) {
  storage.setToken(data.accessTokenUser);
  storage.setUser(data.user);
  return data.user;
}

async function loadUser() {
  if (storage.getUser()) {
    return storage.getUser();
  }
  return null;
}


async function loginFn(data: LoginDto) {
  const response = await login(data);
  return new Promise((resolve, reject) => {
    if (response.data && response.data.user) {
      const user = handleUserResponse(response.data);
      resolve(user);
      return;
    }
    reject(response);
  });
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
async function registerFn() {}

async function logoutFn() {
  queryCache.clear();
  storage.clearToken();
  storage.clearToken();
}



const authConfig = {
  loadUser,
  loginFn,
  logoutFn,
  registerFn,
  LoaderComponent: () => <CustomizedProgressBars/>,
  ErrorComponent: (error: any) => (
    <div style={{ color: "tomato" }}>{JSON.stringify(error, null, 2)}</div>
  )
} as AuthProviderConfig<any>;

export const { AuthProvider, AuthConsumer, useAuth } = initReactQueryAuth<AuthProviderConfig>(authConfig);
