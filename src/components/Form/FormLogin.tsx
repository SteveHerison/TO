"use client";
import { useForm } from "react-hook-form";
import { InputComponent } from "./Inputs/InputFormLogin";
import { UserLogin } from "@/types/loginUser";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { loginUser } from "@/services/userService";
import { AxiosError } from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { useUser } from "@/hooks/useUser";
import { getCurrentUser } from "@/services/userService";

export const FormLogin = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();

  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = async (data: UserLogin) => {
    setErrorMessage("");
    setIsLoading(true);
    try {
      await loginUser({ data });

      const currentUser = await getCurrentUser(); // pega dados do usuário
      setUser(currentUser); // atualiza contexto imediatamente

      router.push("/dashboard");
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      if (error.response?.data?.error) {
        setErrorMessage("E-mail e/ou senha inválidos");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-5 w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full flex flex-col gap-2 items-center"
      >
        <InputComponent
          control={control}
          name="email"
          label="E-mail"
          place="Digite seu e-mail"
          autoComplete="off"
          disabled={isLoading}
        />

        <InputComponent
          control={control}
          name="password"
          label="Senha"
          place="Digite sua senha"
          type="password"
          autoComplete="off"
          disabled={isLoading}
        />

        <Button className="w-80 mt-4" type="submit" disabled={isLoading}>
          {isLoading ? "...Carregando" : "Entrar"}
        </Button>
      </form>
      <div className="absolute bottom-11 bg-black flex items-center justify-center rounded-lg">
        {errorMessage && (
          <p className="text-red-500 p-2 text-lg text-center w-80">
            {errorMessage}
          </p>
        )}
      </div>

      <Link
        className=" font-bold italic hover:underline cursor-pointer my-2 pt-2"
        href="/recuperar"
      >
        Esqueci minha Senha
      </Link>

      <div className="flex gap-2 items-center ">
        <p className="text-lg md:text-sm lg:text-lg font-semibold text-zinc-500">
          Ainda não faz parte da nossa familia?
        </p>
        <Link
          className="text-lg md:text-sm lg:text-lg font-bold italic hover:underline cursor-pointer"
          href="/cadastro"
        >
          Criar conta.
        </Link>
      </div>
      <Link href="/" className="font-semibold pt-20">
        Voltar para Home
      </Link>
    </div>
  );
};
