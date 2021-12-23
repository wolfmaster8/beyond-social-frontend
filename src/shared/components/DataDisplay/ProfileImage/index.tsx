import React from "react";
import { ProfileImageContainerStyled } from "./styles";

type ProfileImageProps = {
  src: string;
  size?: number;
};

const defaultProps = {
  size: 48,
};

function ProfileImage({ src, size = 48 }: ProfileImageProps) {
  return (
    <ProfileImageContainerStyled size={size}>
      <img src={src} alt="" />
    </ProfileImageContainerStyled>
  );
}

ProfileImage.defaultProps = defaultProps;

export default ProfileImage;
