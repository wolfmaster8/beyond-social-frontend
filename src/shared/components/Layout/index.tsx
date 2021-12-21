import React, { ReactNode } from "react";
import { FlexContainer } from "./FlexContainer";
import Grid from "./Grid";

const Layout = ({ children }: { children: ReactNode }) => children;

Layout.Flex = FlexContainer;
Layout.Grid = Grid;

export default Layout;
