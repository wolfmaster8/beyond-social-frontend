import React, { ReactNode } from "react";
import Button from "./Button";
import IconButton from "./IconButton";

const General = ({ children }: { children: ReactNode }) => children;

General.Button = Button;
General.IconButton = IconButton;

export default General;
