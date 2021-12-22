import styled from "styled-components";

export const PostFormStyled = styled.form`
  .form-content {
    margin-bottom: 1rem;
    display: flex;
    .profile-image {
      width: 3rem;
      height: 3rem;
      border-radius: 50px;
      margin-right: 1rem;
    }

    textarea {
      border: none;
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      color: ${({ theme }) => theme.colors.light.blue[800]};
      &::placeholder {
        color: ${({ theme }) => theme.colors.light.neutral[500]};
        font-size: 1rem;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }
`;
