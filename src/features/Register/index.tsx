import React from "react";
import HelmetContainer from "../../shared/components/HelmetContainer";
import DataEntry from "../../shared/components/DataEntry";
import General from "../../shared/components/General";
import RoutesEnum from "../../routes/RoutesEnum";
import BeyondSocialLogo from "../../assets/branding/beyond-social-logo.svg";
import LoginImage from "../../assets/images/hi5.png";
import { LoginContainer } from "../Login/styles";
import Layout from "../../shared/components/Layout";
import useRegisterController from "./useRegisterController";

export default function Register() {
  const { handleSetForm, handleSubmitForm, values } = useRegisterController();

  const isLoginButtonDisabled =
    !values.username ||
    !values.password ||
    !values.lastName ||
    !values.firstName ||
    !values.email;
  return (
    <>
      <HelmetContainer pageTitle="Registro" />
      <LoginContainer>
        <div className="form-section">
          <h1 className="heading-3 text-blue-900">
            <b>Beyond Social</b>
          </h1>
          <p className="text-blue-500 body-short-2">
            Haz parte de la red <b>#1 en el Metaverso</b>
          </p>
          <form onSubmit={handleSubmitForm}>
            <Layout.Grid
              columns="1fr 1fr"
              gap="0.5rem"
              oneColumnOnMobile={false}
            >
              <DataEntry.Input
                name="firstName"
                onChange={handleSetForm}
                label="Nombre"
              />
              <DataEntry.Input
                name="lastName"
                onChange={handleSetForm}
                label="Apellido"
              />
            </Layout.Grid>
            <DataEntry.Input
              name="email"
              label="Email"
              onChange={handleSetForm}
              type="email"
            />
            <DataEntry.Input
              name="username"
              onChange={handleSetForm}
              label="Username"
            />
            <DataEntry.Input
              name="password"
              label="Contraseña"
              onChange={handleSetForm}
              type="password"
            />
            <General.Button disabled={isLoginButtonDisabled}>
              Registrarse
            </General.Button>
          </form>
          <General.Button variant="link" linkTo={RoutesEnum.login}>
            ¿Ya tienes cuenta?
          </General.Button>
        </div>
        <div className="image">
          <img className="logo" src={BeyondSocialLogo} alt="" />
          <img className="floating" src={LoginImage} alt="" />
        </div>
      </LoginContainer>
    </>
  );
}
