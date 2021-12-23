import React, { ReactNode } from "react";
import { FlexContainer } from "./FlexContainer";
import Grid from "./Grid";
import AppLayout from "./AppLayout";

const Layout = ({ children }: { children: ReactNode }) => children;

Layout.AppLayout = AppLayout;
Layout.Flex = FlexContainer;
Layout.Grid = Grid;

export default Layout;
