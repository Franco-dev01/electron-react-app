import React from "react";

const Home = React.lazy(() => import("../app/pages/index"));

const Routes = [
  {
    path: "/",
    element: <Home />
  }
];

export default Routes;
