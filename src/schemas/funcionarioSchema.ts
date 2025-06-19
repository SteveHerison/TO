import { z } from "zod";

export const funcionarioSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório").max(20),
  email: z.string().email("Email inválido"),
  cpf: z
    .string()
    .regex(
      /^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF deve ter 11 dígitos, com ou sem pontuação"
    ),
  telefone: z.string().min(1, "Nome da clínica é obrigatório"),
  cargo: z.string().min(5, "Nome da clínica é obrigatório"),
  especialidade: z.string().min(5, "Nome da clínica é obrigatório"),
  endereco: z.string().min(5, "Nome da clínica é obrigatório"),
  cep: z.string().min(4, "Nome da clínica é obrigatório"),
  cidade: z.string().min(3, "Nome da clínica é obrigatório"),
  estado: z.string().min(2, "Nome da clínica é obrigatório"),
});

export type FuncionarioFormData = z.infer<typeof funcionarioSchema>;
