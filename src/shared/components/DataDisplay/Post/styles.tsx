import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostLinkStyled = styled(Link)`
  text-decoration: none;
  transition: all 0.2s;
`;

export const PostStyled = styled.article`
  border-top: 1px solid ${({ theme }) => theme.colors.light.blue[50]};
  padding: 1rem 2rem 0 2rem;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.light.neutral[900]};

  .post-content {
    display: flex;

    .post-content-text {
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

export const ActionsStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5.5rem;
  margin-bottom: 1rem;
  .react-loading-skeleton {
    margin-right: 1rem;
  }
`;
