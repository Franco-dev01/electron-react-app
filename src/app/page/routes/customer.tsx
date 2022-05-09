import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../customer";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="" element={<Customer />} />
    </Routes>
  );
}
