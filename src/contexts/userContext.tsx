"use client";

import React, { createContext, useEffect, useState } from "react";
import { Api } from "@/providers";
import { User } from "@/types/registerUsers";

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<IUserContext | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await Api.get("/me");
        setUser(response.data);
      } catch (err) {
        console.error("Erro ao buscar o usuário:", err);
      }
    }

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
