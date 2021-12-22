import React from "react";
import { ProfileImageContainerStyled } from "./styles";

type ProfileImageProps = {
  src: string;
};

export default function ProfileImage({ src }: ProfileImageProps) {
  return (
    <ProfileImageContainerStyled>
      <img src={src} alt="" />
    </ProfileImageContainerStyled>
  );
}
