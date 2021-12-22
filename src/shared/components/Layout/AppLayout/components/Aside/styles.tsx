import styled from "styled-components";

export const AsideStyled = styled.nav`
  margin: 4rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    width: 2rem;
    margin-bottom: 2rem;
  }

  .sidebar-content {
    position: sticky;
    top: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    .profile {
      margin-bottom: 1rem;
    }
  }

  @media all and (max-width: 768px) {
    margin: 0;
    .icon {
      margin-bottom: 0;
      width: 1.5rem;
      height: 1.5rem;
    }
    .sidebar-content {
      background-color: ${({ theme }) => theme.colors.light.neutral.white};
      min-width: 100%;
      position: fixed;
      bottom: 0;
      top: unset;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
    }
  }
`;
