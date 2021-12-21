import React, { ReactNode } from "react";
import { FlexContainer } from "./FlexContainer";

const Layout = ({ children }: { children: ReactNode }) => children;

Layout.Flex = FlexContainer;

export default Layout;
