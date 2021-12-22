import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IconButtonStyled } from "./styles";
import { ColorType } from "../../DataDisplay/ActionItem/types";

type ButtonProps = {
  icon: ReactElement;
  linkTo?: string;
  size?: number;
  color?: ColorType;
};

const defaultProps = {
  linkTo: undefined,
  size: 48,
  color: "blue",
};

function IconButton({
  icon,
  linkTo,
  size = 48,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const iconSize: number = size / 2;
  if (linkTo) {
    return (
      <Link to={linkTo}>
        <IconButtonStyled size={size} {...props}>
          {React.cloneElement(icon, {
            width: iconSize,
            height: iconSize,
          })}
        </IconButtonStyled>
      </Link>
    );
  }
  return (
    <IconButtonStyled size={size} {...props}>
      {React.cloneElement(icon, {
        width: iconSize,
        height: iconSize,
      })}
    </IconButtonStyled>
  );
}

IconButton.defaultProps = defaultProps;

export default IconButton;
