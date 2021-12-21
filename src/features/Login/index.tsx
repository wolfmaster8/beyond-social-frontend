import React from "react";
import { Link } from "react-router-dom";
import RoutesEnum from "../../routes/RoutesEnum";
import HelmetContainer from "../../shared/components/HelmetContainer";

export default function Login() {
  return (
    <>
      <HelmetContainer pageTitle="Login" />
      <h1>Beyond</h1>
      <Link to={RoutesEnum.register}>Register</Link>
    </>
  );
}
