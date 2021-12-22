import React, { createContext, ReactNode, useState } from "react";

type PostContextType = {
  openPostModal: () => void;
  closePostModal: () => void;
  showModal: boolean;
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
    <PostContext.Provider value={{ openPostModal, closePostModal, showModal }}>
      {children}
    </PostContext.Provider>
  );
}
