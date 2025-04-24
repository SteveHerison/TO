export type User = {
  nome: string;
  email: string;
  cpf: string;
  tipo: "ADMIN" | "FUNCIONARIO";
  nomeClinica: string;
  password: string;
  passwordConfirm: string;
};
