import styled from "styled-components";

export const AppLayoutStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.light.blue[10]};
  min-height: 100vh;
  padding: 0 4rem;
  .container {
    display: grid;
    grid-template-areas: "body sidebar";
    grid-template-columns: 10fr 1fr;
  }
  .body {
    margin: 0 0 0 4rem;
    min-height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
    border-left: 1px solid ${({ theme }) => theme.colors.light.blue[50]};

    h1 {
      padding: 1rem 2rem;
    }
  }

  @media all and (max-width: 768px) {
    min-height: auto;
    padding: 0 1rem;
    .container {
      grid-template-areas: "body" "sidebar";
      grid-template-columns: 1fr;
      grid-template-rows: 10fr 1fr;
    }
    .body {
      margin: 0;
    }
  }
`;
