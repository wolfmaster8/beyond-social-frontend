import styled from "styled-components";

export const LoginContainer = styled.main`
  display: grid;
  grid-template-areas: "form image";
  grid-template-columns: 35% 65%;
  min-height: 100vh;
  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 3rem;
    form {
      margin-top: 2rem;
      margin-bottom: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      button {
        margin-top: 1rem;
      }
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.light.blue[10]};
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
      }
    }
    .logo {
      width: 220px;
      height: auto;
    }
    img {
      animation: float 6s ease-in-out infinite;
      object-fit: fill;
      max-width: 100%;
      height: auto;
    }
  }

  @media all and (max-width: 768px) {
    grid-template-areas: "image" "form";
    grid-template-columns: 100%;

    .image {
      .floating {
        width: 200px;
      }
      img {
        animation: none;
      }
    }
  }
`;
