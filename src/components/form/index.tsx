"use client";

import type { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormData, userSchema } from "@/schemas/userShema";
import { Button } from "../ui/button";
import { InputComponent } from "../Input";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser } from "@/services/userService";
import { useRouter } from "next/navigation";

export const ComponentForm = () => {
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

  const handleSubmitForm: SubmitHandler<UserFormData> = async (data) => {
    try {
      await registerUser({ data });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      if (error.response?.data?.error) {
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
        />

        <InputComponent
          control={control}
          name="email"
          label="E-mail"
          place="Digite seu e-mail"
        />

        <InputComponent
          control={control}
          name="cpf"
          label="CPF"
          place="Digite seu CPF"
        />

        <InputComponent
          control={control}
          name="nomeClinica"
          label="Nome da Clínica"
          place="Digite o nome da clínica"
        />

        <InputComponent
          control={control}
          name="password"
          label="Senha"
          place="Digite sua senha"
          type="password"
        />

        <InputComponent
          control={control}
          name="passwordConfirm"
          rules={{ required: "Campo obrigatório" }}
          label="Confirmar Senha"
          place="Confirme sua senha"
          type="password"
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
    </div>
  );
};
