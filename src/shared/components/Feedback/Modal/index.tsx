import React, { ReactNode } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { Dialog } from "@reach/dialog";
import { ModalStyled } from "./styles";
import General from "../../General";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
};

export default function Modal({ children, isOpen, closeModal }: ModalProps) {
  return (
    <ModalStyled isOpen={isOpen} onDismiss={closeModal}>
      <div className="modal-header">
        <General.IconButton icon={<UilTimes />} onClick={closeModal} />
      </div>
      <div className="modal-content">{children}</div>
    </ModalStyled>
  );
}
