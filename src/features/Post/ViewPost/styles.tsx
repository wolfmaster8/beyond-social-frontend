import styled from "styled-components";

export const CommentsForm = styled.form`
  border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  margin: 2rem;
  padding: 1rem 0;

  .comment-form {
    display: flex;
    margin-bottom: 1rem;
    img {
      margin-right: 1rem;
    }
  }
`;
