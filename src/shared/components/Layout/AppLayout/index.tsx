import React, { ReactNode } from "react";
import Aside from "./components/Aside";
import { AppLayoutStyled } from "./styles";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppLayoutStyled>
      <div className="container">
        <section className="body">{children}</section>
        <Aside />
      </div>
    </AppLayoutStyled>
  );
}
