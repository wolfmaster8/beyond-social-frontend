import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesEnum from "./RoutesEnum";
import Login from "../features/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={RoutesEnum.register} element={<h1>Register</h1>} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
