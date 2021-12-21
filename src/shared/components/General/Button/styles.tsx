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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.light.blue[700]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.light.blue[500]};
    color: ${({ theme }) => theme.colors.light.blue[100]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.light.blue[400]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.light.blue[100]};
      color: ${({ theme }) => theme.colors.light.blue[300]};
    }
  }

  &.secondary {
    color: ${({ theme }) => theme.colors.light.blue[500]};
    background-color: ${({ theme }) => theme.colors.light.blue[50]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.light.blue[100]};
      color: ${({ theme }) => theme.colors.light.blue[800]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.light.blue[50]};
      color: ${({ theme }) => theme.colors.light.blue[200]};
    }
  }

  &.link {
    color: ${({ theme }) => theme.colors.light.blue[500]};
    text-decoration: underline ${({ theme }) => theme.colors.light.blue[500]};
    background-color: transparent;
    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.light.blue[800]};
      text-decoration: underline ${({ theme }) => theme.colors.light.blue[800]};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.light.blue[200]};
      text-decoration: underline ${({ theme }) => theme.colors.light.blue[200]};
    }
  }
`;
