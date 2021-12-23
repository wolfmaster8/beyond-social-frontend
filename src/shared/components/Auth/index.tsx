import { ReactNode } from "react";
import PrivateRoute from "./PrivateRoute";

const Auth = ({ children }: { children: ReactNode }) => children;

Auth.PrivateRoute = PrivateRoute;

export default Auth;
