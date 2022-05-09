import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/Sign";

export function SignupRoutes() {
  return (
    <Routes>
      <Route path="" element={<SignUp />} />
    </Routes>
  );
}
