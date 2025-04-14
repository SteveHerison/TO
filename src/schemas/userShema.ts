import { z } from "zod";

export const userSchema = z
  .object({
    nome: z.string().min(1, "Nome é obrigatório").max(20),
    email: z.string().email("Email inválido"),
    cpf: z
      .string()
      .regex(
        /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        "CPF deve ter 11 dígitos, com ou sem pontuação"
      ),
    nomeClinica: z.string().min(1, "Nome da clínica é obrigatório"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Senhas não coincidem",
    path: ["passwordConfirm"],
  });

export type UserFormData = z.infer<typeof userSchema>;
