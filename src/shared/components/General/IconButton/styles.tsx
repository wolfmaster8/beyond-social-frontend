import styled from "styled-components";
import { ColorType } from "../../DataDisplay/ActionItem/types";

export type IconProps = {
  size?: number;
  color?: ColorType;
};

export const IconButtonStyled = styled.button<IconProps>`
  border-radius: 50px;
  margin-bottom: 0.5rem;
  border: none;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  background-color: transparent;

  svg {
    fill: ${({ theme, color }) =>
      color === "blue"
        ? theme.colors.light.blue[400]
        : theme.colors.light.red[600]};
  }

  &:hover {
    fill: ${({ theme }) => theme.colors.light.blue[600]};
    background-color: ${({ theme, color }) =>
      color === "blue"
        ? theme.colors.light.blue[50]
        : theme.colors.light.red[50]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.light.blue[700]};
  }

  &:disabled {
    cursor: not-allowed;
    svg {
      fill: ${({ theme }) => theme.colors.light.blue[200]};
    }
  }
  @media all and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
