import styled from "styled-components";

type ProfileImageContainerProps = {
  size: number;
};

export const ProfileImageContainerStyled = styled.div<ProfileImageContainerProps>`
  img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 100px;
  }
`;
