import styled from "styled-components";

export const InputContainer = styled.div`
  display: inline-grid;
`;

export const TextInputStyled = styled.input`
  border: 2px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 0.25rem;
  background-color: ${({ theme }) => theme.colors.light.neutral[50]};
  padding: 0.5rem;
  transition: all 0.2s;
  font-size: 14px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.light.neutral[900]};
  outline: 2px solid transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light.neutral[500]};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.light.blue[500]};
  }
`;
