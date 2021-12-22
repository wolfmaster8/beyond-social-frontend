import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Dialog } from "@reach/dialog";
import Feedback from "../components/Feedback";
import General from "../components/General";

type PostContextType = {
  openPostModal: () => void;
};

export const PostContext = createContext({} as PostContextType);

type PostContextProps = {
  children: ReactNode;
};

export function PostContextProvider({ children }: PostContextProps) {
  const [showModal, setShowModal] = useState(false);

  const openPostModal = () => setShowModal(true);
  const closePostModal = () => setShowModal(false);

  return (
    <PostContext.Provider value={{ openPostModal }}>
      {children}
      <Feedback.Modal isOpen={showModal} closeModal={closePostModal}>
        <form>
          <p>hjaol</p>
          <General.Button>Publicar</General.Button>
        </form>
      </Feedback.Modal>
    </PostContext.Provider>
  );
}
