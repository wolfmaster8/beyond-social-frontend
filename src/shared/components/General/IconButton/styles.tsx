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
  outline: 1px solid transparent;

  svg {
    fill: ${({ theme, color }) =>
      color === "red"
        ? theme.colors.light.red[600]
        : theme.colors.light.blue[400]};
  }

  &:hover {
    fill: ${({ theme }) => theme.colors.light.blue[600]};
    background-color: ${({ theme, color }) =>
      color === "red"
        ? theme.colors.light.red[50]
        : theme.colors.light.blue[50]};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.light.neutral[100]};
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
