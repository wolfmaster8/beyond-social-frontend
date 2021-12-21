import React from "react";
import { Link } from "react-router-dom";
import RoutesEnum from "../../routes/RoutesEnum";
import HelmetContainer from "../../shared/components/HelmetContainer";
import General from "../../shared/components/General";

export default function Login() {
  return (
    <>
      <HelmetContainer pageTitle="Login" />
      <h1>Beyond</h1>
      <Link to={RoutesEnum.register}>Register</Link>
      <General.Button>Click</General.Button>
      <General.Button disabled>Click</General.Button>
      <General.Button variant="link">Click</General.Button>
      <General.Button variant="link" disabled>
        Click
      </General.Button>
    </>
  );
}
