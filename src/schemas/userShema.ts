import { z } from "zod";

export const userSchema = z
  .object({
    nome: z.string().min(1, "Nome é obrigatório").max(20),
    email: z.string().email("Email inválido"),
    cpf: z
      .string()
      .regex(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve ter 11 dígitos"),
    clinicNome: z.string().min(1, "Nome da clínica é obrigatório"),
    planId: z.number().int("Plano inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Senhas não coincidem",
    path: ["confirmpassword"],
  });

export type UserFormData = z.infer<typeof userSchema>;
