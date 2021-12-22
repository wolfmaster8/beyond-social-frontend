import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import PostEntity from "../../models/entity/PostEntity";
import PostManager from "../../managers/PostManager";

type HomeContextType = {
  posts: PostEntity[];
  getFeed: () => void;
};

export const HomeContext = createContext({} as HomeContextType);

type HomeContextProps = {
  children: ReactNode;
};

export function HomeContextProvider({ children }: HomeContextProps) {
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
    <HomeContext.Provider value={{ posts, getFeed }}>
      {children}
    </HomeContext.Provider>
  );
}
