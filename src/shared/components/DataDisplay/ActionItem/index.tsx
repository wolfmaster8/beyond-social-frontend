import React, { ReactElement } from "react";
import General from "../../General";
import { ActionItemStyled } from "./styles";

type ActionItemProps = {
  icon: ReactElement;
  count: number | string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: "red" | "blue";
};

const defaultProps = {
  color: "blue",
};

function ActionItem({ onClick, count, icon, color }: ActionItemProps) {
  const textColor = color === "blue" ? "text-neutral-600" : "text-red-600";
  return (
    <ActionItemStyled>
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
