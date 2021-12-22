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
        <section className="body">
          <h1 className="text-blue-700 body-long-2 page-title">
            <b>Home</b>
          </h1>
          {children}
        </section>
        <Aside />
      </div>
    </AppLayoutStyled>
  );
}
