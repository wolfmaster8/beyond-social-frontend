import styled from "styled-components";

export const AppLayoutStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.light.blue[10]};
  min-height: 100vh;
  .container {
    display: grid;
    grid-template-areas: "body sidebar";
    grid-template-columns: 10fr 1fr;
    gap: 1rem;
  }
  .body {
    padding: 4rem;
    border-right: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  }
`;
