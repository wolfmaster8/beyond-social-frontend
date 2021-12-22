import styled from "styled-components";
import { Dialog } from "@reach/dialog";

export const ModalStyled = styled(Dialog)`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0;
  .modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
  }

  .modal-content {
    padding: 0 2rem 2rem;
  }
`;
