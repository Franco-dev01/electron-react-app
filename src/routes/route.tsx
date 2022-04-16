import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default Router;
