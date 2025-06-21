"use client";

import React, { createContext, useEffect, useState } from "react";
import { Api } from "@/providers";
import { User } from "@/types/registerUsers";
import { AxiosError } from "axios";
import { usePathname } from "next/navigation";

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoadingUser: boolean;
};

export const UserContext = createContext<IUserContext | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Evita buscar user em páginas públicas
    const isPublicRoute = ["/login", "/cadastro", "/recuperar"].includes(
      pathname
    );
    if (isPublicRoute) {
      setIsLoadingUser(false);
      return;
    }

    async function fetchUser() {
      try {
        const response = await Api.get("/me", { withCredentials: true });
        setUser(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response?.status !== 401) {
          console.error("Erro ao buscar o usuário:", axiosError.message);
        }
        setUser(null);
      } finally {
        setIsLoadingUser(false);
      }
    }
    fetchUser();
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
}
