import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserContextProvider");
  }
  return context;
};
