import styled from "styled-components";

type Props = {
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "inherit"
    | "initial"
    | "unset";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "inherit"
    | "initial"
    | "unset";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center"
    | "inherit"
    | "initial"
    | "unset";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "inherit"
    | "initial"
    | "unset"
    | "stretch";
  padding?: [number, number, number, number];
};

const defaultProps: Props = {
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignContent: "center",
  padding: [0, 0, 0, 0],
};

const FlexContainer = styled.div<Props>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) =>
    padding &&
    `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
`;

FlexContainer.defaultProps = defaultProps;

export { FlexContainer };
