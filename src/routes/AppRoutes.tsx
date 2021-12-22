import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesEnum from "./RoutesEnum";
import Login from "../features/Login";
import Home from "../features/Home";
import Auth from "../shared/components/Auth";
import Register from "../features/Register";
import ViewPost from "../features/Post/ViewPost";
import ViewProfileWrapper from "../features/Profile/ViewProfile";

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
        <Route
          path={`${RoutesEnum.post}/:id`}
          element={
            <Auth.PrivateRoute>
              <ViewPost />
            </Auth.PrivateRoute>
          }
        />
        <Route
          path={`${RoutesEnum.user}/:username`}
          element={
            <Auth.PrivateRoute>
              <ViewProfileWrapper />
            </Auth.PrivateRoute>
          }
        />
        <Route path={RoutesEnum.login} element={<Login />} />
        <Route path={RoutesEnum.register} element={<Register />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
