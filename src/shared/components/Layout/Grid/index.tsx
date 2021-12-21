import React, { ReactNode } from "react";
import GridLayout, { GridLayoutProps } from "./styles";

type GridProps = {
  children: ReactNode;
};

export default function Grid({
  children,
  columns,
  oneColumnOnMobile,
  gap,
}: GridProps & GridLayoutProps) {
  return (
    <GridLayout
      columns={columns}
      gap={gap}
      oneColumnOnMobile={oneColumnOnMobile}
    >
      {children}
    </GridLayout>
  );
}
