import { jwtVerify } from "jose";

type JWTPayload = {
  id?: number;
  email?: string;
  role?: string;
  name?: string;
  clinicId?: number;
  sub: string;
};

export default async function verifyToken(
  token: string
): Promise<JWTPayload | null> {
  if (!token) {
    console.warn("Token não fornecido");
    return null;
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET não está definido! Verifique seu .env");
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
      {
        algorithms: ["HS256"],
      }
    );
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não está definido! Verifique seu .env");
    }

    return payload as JWTPayload;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao verificar o JWT:", error.message);
    } else {
      console.error("Erro desconhecido ao verificar o JWT:", error);
    }
    return null;
  }
}
