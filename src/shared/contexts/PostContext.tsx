import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PostEntity from "../../models/entity/PostEntity";
import PostManager from "../../managers/PostManager";
import { GenericIdParameter } from "../utils/GlobalTypes";
import useModal from "../hooks/useModal";

type PostContextType = {
  openPostModal: () => void;
  closePostModal: () => void;
  showModal: boolean;
  isLoading: boolean;
  posts: PostEntity[];
  getFeed: () => void;
  likePost: ({ id }: GenericIdParameter) => void;
};

export const PostContext = createContext({} as PostContextType);

type PostContextProps = {
  children: ReactNode;
};

export function PostContextProvider({ children }: PostContextProps) {
  const { closeModal, openModal, showModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  const [posts, setPosts] = useState<PostEntity[]>([]);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const feedPosts = await PostManager.feed();
      setPosts(feedPosts);
      setIsLoading(false);
    } catch (e) {
      toast.error("Ocurrió un error al buscar tu feed");
    }
  };

  const likePost = async ({ id }: GenericIdParameter) => {
    try {
      await PostManager.like({ id });
      await getFeed();
    } catch (e) {
      toast.error("No pudimos enviar tu like");
    }
  };

  return (
    <PostContext.Provider
      value={{
        openPostModal: openModal,
        closePostModal: closeModal,
        showModal,
        posts,
        getFeed,
        likePost,
        isLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
