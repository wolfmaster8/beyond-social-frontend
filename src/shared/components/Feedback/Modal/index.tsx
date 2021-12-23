import React, { ReactNode } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { ModalStyled } from "./styles";
import General from "../../General";

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  title?: string;
};

const defaultProps = {
  title: undefined,
};

function Modal({ children, isOpen, closeModal, title }: ModalProps) {
  return (
    <ModalStyled isOpen={isOpen} onDismiss={closeModal}>
      <div className="modal-header">
        <h2 className="heading-5 text-blue-900">{title}</h2>
        <General.IconButton icon={<UilTimes />} onClick={closeModal} />
      </div>
      <div className="modal-content">{children}</div>
    </ModalStyled>
  );
}

Modal.defaultProps = defaultProps;

export default Modal;
