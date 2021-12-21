import styled from "styled-components";

export type GridLayoutProps = {
  columns: string;
  gap: string;
  oneColumnOnMobile?: boolean;
};

const defaultProps = {
  oneColumnOnMobile: true,
};

const GridLayout = styled.div<GridLayoutProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  gap: ${({ gap }) => gap || "1rem"};

  @media all and (max-width: 768px) {
    grid-template-columns: ${({ columns, oneColumnOnMobile }) =>
      oneColumnOnMobile ? "1fr" : columns};
  }
`;

GridLayout.defaultProps = defaultProps;

export default GridLayout;
