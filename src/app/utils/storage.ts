export const storagePrefix = "kkf";

export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    return window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    return window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setUser: (user: Record<string, any>) => {
    return window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },
  getUser: () => {
    return window.localStorage.getItem(`${storagePrefix}user`) as string;
  },
  clearUser: () => {
    return window.localStorage.removeItem(`${storagePrefix}user`);
  }
};
