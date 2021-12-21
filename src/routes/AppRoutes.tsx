import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesEnum from "./RoutesEnum";
import Login from "../features/Login";
import Home from "../features/Home";
import Auth from "../shared/components/Auth";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutesEnum.main}
          element={
            <Auth.PrivateRoute>
              <Home />
            </Auth.PrivateRoute>
          }
        />
        <Route path={RoutesEnum.login} element={<Login />} />
        <Route path={RoutesEnum.register} element={<h1>Register</h1>} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
