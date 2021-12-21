import React from "react";
import RoutesEnum from "../../routes/RoutesEnum";
import HelmetContainer from "../../shared/components/HelmetContainer";
import General from "../../shared/components/General";
import DataEntry from "../../shared/components/DataEntry";

export default function Login() {
  return (
    <>
      <HelmetContainer pageTitle="Login" />
      <h1 className="heading-03 text-blue-600">Beyond</h1>
      <DataEntry.Input name="name" label="Email" placeholder="Email" />
      <General.Button variant="link" linkTo={RoutesEnum.register}>
        Register
      </General.Button>
    </>
  );
}
