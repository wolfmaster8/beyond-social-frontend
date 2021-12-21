import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "link";
};

const defaultProps = {
  variant: "primary",
};

function Button({
  children,
  variant,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonStyled className={variant} {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = defaultProps;

export default Button;
