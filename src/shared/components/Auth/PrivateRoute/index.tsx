import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import RoutesEnum from "../../../../routes/RoutesEnum";
import AuthenticationService from "../../../../services/AuthenticationService";
import { setRequestInterceptor } from "../../../../services/apiService";
import { PostContextProvider } from "../../../contexts/PostContext";
import CreatePost from "../../../../features/Post/CreatePost";
import { UserContextProvider } from "../../../contexts/UserContext";

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isLoggedIn = AuthenticationService.isUserAuthenticated();
  const location = useLocation();

  if (!isLoggedIn)
    return <Navigate to={RoutesEnum.login} state={{ from: location }} />;
  setRequestInterceptor();

  return (
    <UserContextProvider>
      <PostContextProvider>
        {children} <CreatePost />
      </PostContextProvider>
    </UserContextProvider>
  );
}
