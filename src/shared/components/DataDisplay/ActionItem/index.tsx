import React, { ReactElement } from "react";
import General from "../../General";
import { ActionItemStyled } from "./styles";

type ActionItemProps = {
  icon: ReactElement;
  count: number | string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: "red" | "blue";
  dataCy?: string;
};

const defaultProps = {
  color: "blue",
  dataCy: undefined,
};

function ActionItem({ onClick, count, icon, color, dataCy }: ActionItemProps) {
  const textColor = color === "blue" ? "text-neutral-600" : "text-red-600";
  return (
    <ActionItemStyled data-cy={dataCy}>
      <General.IconButton
        size={32}
        onClick={onClick}
        icon={icon}
        color={color}
      />{" "}
      <p className={`${textColor} label-1`}>{count ?? 0}</p>
    </ActionItemStyled>
  );
}

ActionItem.defaultProps = defaultProps;

export default ActionItem;
