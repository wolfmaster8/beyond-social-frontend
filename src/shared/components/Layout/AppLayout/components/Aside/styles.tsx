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
    //background-color: ${({ theme }) => theme.colors.light.blue[100]};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    .profile-image {
      width: 3rem;
      height: 3rem;
      border-radius: 50px;
      margin-bottom: 1rem;
    }
  }
`;
