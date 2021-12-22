import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  border: none;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  color: ${({ theme }) => theme.colors.light.blue[800]};
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.light.neutral[500]};
    font-size: 1rem;
  }
}
`;
