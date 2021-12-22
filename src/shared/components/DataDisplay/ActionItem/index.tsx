import React, { ReactElement } from "react";
import General from "../../General";
import { ActionItemStyled } from "./styles";

type ActionItemProps = {
  icon: ReactElement;
  count: number | string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ActionItem({ onClick, count, icon }: ActionItemProps) {
  return (
    <ActionItemStyled>
      <General.IconButton size={32} onClick={onClick} icon={icon} />{" "}
      <p className="text-neutral-600 label-1">{count ?? 0}</p>
    </ActionItemStyled>
  );
}
