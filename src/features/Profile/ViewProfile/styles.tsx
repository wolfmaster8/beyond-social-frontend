import styled from "styled-components";

export const ProfileStyled = styled.article`
  border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  padding: 2rem;
  display: flex;
  align-items: center;
  .profile-data {
    margin-left: 2rem;
  }
`;

export const PostsCountStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  padding: 2rem;
`;
