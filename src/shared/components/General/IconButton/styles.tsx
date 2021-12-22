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
    svg {
      fill: ${({ theme }) => theme.colors.light.blue[200]};
    }
  }
  @media all and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
