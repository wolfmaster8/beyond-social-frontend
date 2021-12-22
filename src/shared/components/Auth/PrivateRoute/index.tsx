import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import RoutesEnum from "../../../../routes/RoutesEnum";
import AuthenticationService from "../../../../services/AuthenticationService";
import { setRequestInterceptor } from "../../../../services/apiService";
import { PostContextProvider } from "../../../contexts/PostContext";
import CreatePost from "../../../../features/Post/CreatePost";

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isLoggedIn = AuthenticationService.isUserAuthenticated();
  const location = useLocation();

  console.log({ isLoggedIn });

  useEffect(() => {
    if (isLoggedIn) {
      setRequestInterceptor();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn)
    return <Navigate to={RoutesEnum.login} state={{ from: location }} />;
  return (
    <PostContextProvider>
      {children} <CreatePost />
    </PostContextProvider>
  );
}
