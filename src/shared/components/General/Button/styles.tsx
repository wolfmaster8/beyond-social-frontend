import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 2rem;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  font-size: 14px;
  transition: all 0.2s;
  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.light.blue[600]};
    color: ${({ theme }) => theme.colors.light.blue[100]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.light.blue[500]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.light.blue[200]};
      color: ${({ theme }) => theme.colors.light.blue[400]};
    }
  }

  &.secondary {
    color: ${({ theme }) => theme.colors.light.blue[600]};
    background-color: ${({ theme }) => theme.colors.light.blue[100]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.light.blue[200]};
      color: ${({ theme }) => theme.colors.light.blue[900]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.light.blue[100]};
      color: ${({ theme }) => theme.colors.light.blue[300]};
    }
  }

  &.link {
    color: ${({ theme }) => theme.colors.light.blue[600]};
    text-decoration: underline ${({ theme }) => theme.colors.light.blue[600]};
    background-color: transparent;
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.light.blue[900]};
      text-decoration: underline ${({ theme }) => theme.colors.light.blue[900]};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.light.blue[300]};
      text-decoration: underline ${({ theme }) => theme.colors.light.blue[300]};
    }
  }
`;
