export type User = {
  nome: string;
  email: string;
  cpf: string;
  clinicNome: string;
  planId: number;
  tipo: "ADMIN";
  nomeClinica: string;
  password: string;
  passwordConfirm: string;
  clinicId?: number | null;
  clinic?: Clinic | null;
};
export interface Clinic {
  id: number;
  nome: string;
  cnpj?: string | null;
  emailClinic?: string | null;
  enderecoCompleto?: string | null;
  planId: number;
  donoId: number;
}
