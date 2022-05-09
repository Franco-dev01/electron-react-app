import lazyImport from "../utils/lazy-imports";
import React, { Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";
import { AuthLayout } from "../auth";

const { AuthRoutes } = lazyImport(() => import("../auth"), "AuthRoutes");
const { SignupRoutes } = lazyImport(() => import("../auth"), "SignupRoutes");
const { HomeRoutes } = lazyImport(() => import("../page/routes/home"), "HomeRoutes");

const Auth: React.FC = () => {
  return (
    <Suspense fallback={<ProgressBar />}>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </Suspense>
  );
};

ProgressBar.config({
  barColors: {
    "0": "#437DF1",
    "1": "#437DF1",
  },
  shadowBlur: 1,
  shadowColor: ""
});
export const publicRoute: RouteObject[] = [
  {
    path: "auth/",
    element: <Auth />,
    children: [
      {
        path: "login/",
        element: <AuthRoutes />
      },
      {
        path: "signup/",
        element: <SignupRoutes />
      },
    ],
  },
  {
    path: "/",
    element: <HomeRoutes />
  }
];
