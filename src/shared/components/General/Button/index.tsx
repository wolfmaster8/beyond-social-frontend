import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
  linkTo?: string;
};

const defaultProps = {
  variant: "primary",
  linkTo: undefined,
};

function Button({
  children,
  variant,
  linkTo,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (linkTo) {
    return (
      <Link to={linkTo}>
        <ButtonStyled className={variant} {...props}>
          {children}
        </ButtonStyled>
      </Link>
    );
  }
  return (
    <ButtonStyled className={variant} {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = defaultProps;

export default Button;
