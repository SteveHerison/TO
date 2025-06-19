import { cookies } from "next/headers";
import verifyToken from "@/functions/verify-token";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  const user = token ? await verifyToken(token) : null;
  console.log("Token recebido do cookie:", token);

  return new Response(
    JSON.stringify({
      ok: !!user,
      user,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
