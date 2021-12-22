import styled from "styled-components";

export const CommentStyled = styled.article`
  border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  padding: 1rem 2rem 1rem 2rem;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.light.neutral[900]};

  .comment-content {
    display: flex;

    .comment-content-text {
      margin-left: 1rem;
    }
  }

  a {
    transition: all 0.2s;
    text-decoration: none;
    &:hover {
      text-decoration: underline
        ${({ theme }) => theme.colors.light.neutral[600]};
    }
  }
`;
