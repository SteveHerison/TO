"use client";

import type { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormData, userSchema } from "@/schemas/userShema";
import { Button } from "../ui/button";
import { InputComponent } from "./Inputs/InputFormCadastro";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "@/services/userService";
import { useRouter } from "next/navigation";
import { User } from "@/types/registerUsers";

type isSucess = {
  setIsSucess: (value: boolean) => void;
};
export const FormCadastro = ({ setIsSucess }: isSucess) => {
  const router = useRouter();

  const { control, handleSubmit } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      nomeClinica: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmitForm: SubmitHandler<User> = async (data) => {
    try {
      await registerUser({ data });

      setIsSucess(true);

      setTimeout(() => {
        setIsSucess(false);
        router.push("/login");
      }, 3000);
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      if (error.response?.data?.error) {
        console.log("Dados enviados:", data);

        alert(error.response.data.error);
      } else {
        console.error("Erro inesperado:", error.message);
      }
    }
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full flex flex-col gap-2 items-center"
      >
        <InputComponent
          control={control}
          name="nome"
          label="Nome"
          place="Digite seu nome"
          autoComplete="off"
        />

        <InputComponent
          control={control}
          name="email"
          label="E-mail"
          place="Digite seu e-mail"
          autoComplete="off"
        />

        <InputComponent
          control={control}
          name="cpf"
          label="CPF"
          place="Digite seu CPF"
          autoComplete="off"
        />

        <InputComponent
          control={control}
          name="nomeClinica"
          label="Nome da Clínica"
          place="Digite o nome da clínica"
          autoComplete="off"
        />

        <InputComponent
          control={control}
          name="password"
          label="Senha"
          place="Digite sua senha"
          type="password"
          autoComplete="off"
        />

        <InputComponent
          control={control}
          name="passwordConfirm"
          rules={{ required: "Campo obrigatório" }}
          label="Confirmar Senha"
          place="Confirme sua senha"
          type="password"
          autoComplete="off"
        />

        <Button className="w-80 mt-4" type="submit">
          Cadastrar
        </Button>

        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold text-zinc-500">
            Já faz parte da família?
          </p>
          <Link
            className="text-lg font-bold italic hover:underline cursor-pointer"
            href="/login"
          >
            Entrar
          </Link>
        </div>
      </form>
      <div className="w-full items-center flex justify-center">
        <Link href="/" className="font-semibold pt-20">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};
