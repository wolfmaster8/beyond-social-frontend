import styled from "styled-components";
import { Dialog } from "@reach/dialog";

export const ModalStyled = styled(Dialog)`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0;
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    h2 {
      margin-left: 1.5rem;
    }
  }

  .modal-content {
    padding: 0 2rem 2rem;
  }

  @media all and (max-width: 768px) {
    width: 90%;
    box-sizing: border-box;
  }
`;
