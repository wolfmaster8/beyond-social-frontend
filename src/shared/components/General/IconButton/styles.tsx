import styled from "styled-components";

export const IconButtonStyled = styled.button`
  border-radius: 50px;
  margin-bottom: 0.5rem;
  border: none;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  background-color: transparent;

  svg {
    fill: ${({ theme }) => theme.colors.light.blue[400]};
  }

  &:hover {
    fill: ${({ theme }) => theme.colors.light.blue[600]};
    background-color: ${({ theme }) => theme.colors.light.blue[50]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.light.blue[700]};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.light.blue[100]};
    color: ${({ theme }) => theme.colors.light.blue[300]};
  }
`;
