import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IconButtonStyled } from "./styles";

type ButtonProps = {
  icon: ReactElement;
  linkTo?: string;
};

const defaultProps = {
  linkTo: undefined,
};

function IconButton({
  icon,
  linkTo,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (linkTo) {
    return (
      <Link to={linkTo}>
        <IconButtonStyled {...props}>{icon}</IconButtonStyled>
      </Link>
    );
  }
  return <IconButtonStyled {...props}>{icon}</IconButtonStyled>;
}

IconButton.defaultProps = defaultProps;

export default IconButton;
