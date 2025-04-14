// src/services/userService.ts
import { Api } from "@/providers";
import { User } from "@/types/registerUsers";

export const registerUser = async ({ data }: { data: User }) => {
  const result = await Api.post("/users", data);
  return result.data;
};
