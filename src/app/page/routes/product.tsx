import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../product/product";

export function ProductRoutes() {
  return (
    <Routes>
      <Route path="" element={<Product />} />
      {/* <Navigate to="app/dashboard" replace /> */}
    </Routes>
  );
}
