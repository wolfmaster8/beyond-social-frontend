import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import UserEntity from "../../models/entity/UserEntity";
import UserManager from "../../managers/UserManager";

type UserContextType = {
  user: UserEntity;
  getUserProfile: () => void;
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
      const userProfile = await UserManager.getSelfProfile();

      setUser(userProfile);
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message, { id: "user" });
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, getUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}
