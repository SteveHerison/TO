import { Api } from "@/providers";

import { User } from "@/types/registerUsers";

export const registerEmployee = async ({ data }: { data: User }) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);
  const result = await Api.post("/employe", data);
  return result.data;
};
