import { NotFound } from "../page/404/page-error";
import { Navigate, RouteObject } from "react-router-dom";

export const ErrorRoutes: RouteObject[] = [
  {
    path: "error-404",
    element: <NotFound />
  },
  {
    path: "*",
    element: <Navigate to="error-404" />,
  },
];
