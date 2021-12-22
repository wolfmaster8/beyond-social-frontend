import styled from "styled-components";

export const NoMorePostsIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  p {
    text-align: center;
  }
  svg {
    fill: ${({ theme }) => theme.colors.light.blue[100]};
  }
`;
