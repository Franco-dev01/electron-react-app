import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home";

export function HomeRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Navigate to="app/dashboard" replace />
    </Routes>
  );
}
