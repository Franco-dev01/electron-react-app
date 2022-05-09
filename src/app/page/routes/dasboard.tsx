import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/index";

export function DasboardRoutes() {
  return (
    <Routes>
      <Route path="" element={<Dashboard />} />
    </Routes>
  );
}
