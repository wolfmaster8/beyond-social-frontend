import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PostEntity from "../../models/entity/PostEntity";
import PostManager from "../../managers/PostManager";

type PostContextType = {
  openPostModal: () => void;
  closePostModal: () => void;
  showModal: boolean;
  posts: PostEntity[];
  getFeed: () => void;
};

export const PostContext = createContext({} as PostContextType);

type PostContextProps = {
  children: ReactNode;
};

export function PostContextProvider({ children }: PostContextProps) {
  const [showModal, setShowModal] = useState(false);

  const openPostModal = () => setShowModal(true);
  const closePostModal = () => setShowModal(false);

  const [posts, setPosts] = useState<PostEntity[]>([]);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const feedPosts = await PostManager.feed();
      setPosts(feedPosts);
    } catch (e) {
      toast.error("Ocurrió un error al buscar tu feed");
    }
  };

  return (
    <PostContext.Provider
      value={{ openPostModal, closePostModal, showModal, posts, getFeed }}
    >
      {children}
    </PostContext.Provider>
  );
}
