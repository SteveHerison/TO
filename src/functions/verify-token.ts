import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET ?? "");

type JWTPayload = {
  id: number;
  email: string;
  role: string;
};
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET não está definido! Verifique seu .env");
}

export default async function verifyToken(
  token: string
): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as JWTPayload;
  } catch (error) {
    console.error("JWT inválido ou expirado:", error);
    return null;
  }
}
