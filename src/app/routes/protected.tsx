import lazyImport from "../utils/lazy-imports";
import React, { Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";
import GlobalLayout from "../layouts/GlobalLayout";
import { ModalContextProvider } from "../context/modalContext";

const { DasboardRoutes} = lazyImport(() => import("../page/routes/dasboard"), "DasboardRoutes");
const { ProductRoutes } = lazyImport(() => import("../page/index"), "ProductRoutes");
const { CustomerRoutes } = lazyImport(() => import("../page/index"), "CustomerRoutes");
const { QuoteRoutes } = lazyImport(() => import("../page/index"), "QuoteRoutes")

ProgressBar.config({
  barColors: {
    "0": "#437DF1",
    "1": "#437DF1"
  },
  shadowBlur: 1,
  shadowColor: ""
});


const App: React.FC = () => {
  return (
    <Suspense fallback={<ProgressBar />}>
      <GlobalLayout>
        <ModalContextProvider>
        <Outlet />
        </ModalContextProvider>
      </GlobalLayout>
    </Suspense>
  );
};

export const protectedRoute: RouteObject[] = [
  {
    path: "app/",
    element: <App />,
    children: [
      {
        path: "dashboard/",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <DasboardRoutes />
          </Suspense>
        )
      }, 

      {
        path: "product/",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <ProductRoutes />
          </Suspense>
        )
      },
      {
        path: "customer/",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <CustomerRoutes />
          </Suspense>
        )
      },
      {
        path: "quote/*",
        element: (
          <Suspense fallback={<ProgressBar />}>
            <QuoteRoutes />
          </Suspense>
        )
      },
    ],
  },
  
];
