import { Api } from "@/providers";
import { UserLogin } from "@/types/loginUser";
import { User } from "@/types/registerUsers";

export const registerUser = async ({ data }: { data: User }) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);
  const result = await Api.post("/register", data);
  return result.data;
};
export const loginUser = async ({ data }: { data: UserLogin }) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);
  const result = await Api.post("/session", data);
  return result.data;
};
export const getCurrentUser = async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(500);
  const result = await Api.get("/me", { withCredentials: true });
  return result.data;
};

export const logoutUser = async () => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);
  try {
    const result = await Api.post("/logout", {}, { withCredentials: true });
    window.location.href = "/login";
    return result.data;
  } catch (error) {
    console.error("Erro ao realizar o logout:", error);
    throw error;
  }
};
