import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import UserEntity from "../../models/entity/UserEntity";
import UserManager from "../../managers/UserManager";

type UserContextType = {
  user: UserEntity;
};

export const UserContext = createContext({} as UserContextType);

type UserContextProps = {
  children: ReactNode;
};

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState({} as UserEntity);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      const userProfile = await UserManager.getProfile();
      setUser(userProfile);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, { id: "user" });
      }
    }
  };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
