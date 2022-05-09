export function path(root: string, resLint: string) {
  return `${root}${resLint}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/app";

export const PAGE_ROOT = {
  root: ROOTS_DASHBOARD,
  dashboard: path(ROOTS_DASHBOARD, "/dashboard"),
  global: {
    user: path(ROOTS_DASHBOARD, "/user"),
    register: path(ROOTS_AUTH, "/signup")
  }
};
