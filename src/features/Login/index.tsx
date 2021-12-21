import React from "react";
import RoutesEnum from "../../routes/RoutesEnum";
import HelmetContainer from "../../shared/components/HelmetContainer";
import General from "../../shared/components/General";
import DataEntry from "../../shared/components/DataEntry";
import { LoginContainer } from "./styles";
import BeyondSocialLogo from "../../assets/branding/beyond-social-logo.svg";
import LoginImage from "../../assets/images/hi5.png";

export default function Login() {
  return (
    <>
      <HelmetContainer pageTitle="Login" />
      <LoginContainer>
        <div className="form-section">
          <h1 className="heading-3 text-blue-900">
            <b>Beyond Social</b>
          </h1>
          <p className="text-blue-500 body-short-2">
            Inicia sesión en la red <b>#1 en el Metaverso</b>
          </p>
          <form>
            <DataEntry.Input name="username" label="Username" />
            <DataEntry.Input
              name="password"
              label="Contraseña"
              type="password"
            />
            <General.Button>Iniciar Sesión</General.Button>
          </form>
          <General.Button variant="link" linkTo={RoutesEnum.register}>
            ¿No tienes cuenta?
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
