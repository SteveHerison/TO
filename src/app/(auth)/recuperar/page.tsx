"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, FormEvent } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      setError("Preencha o seu e-mail!");
      return;
    }
    setError("");
    setIsLoading(true);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mb-16 w-full">
        <h3 className="text-balance text-2xl font-semibold text-zinc-600">
          Organização
        </h3>
      </div>
      <div className="flex gap-2 flex-col text-xl font-semibold mb-5 w-full">
        <h2>Esqueceu a sua senha?</h2>
        <p className="text-sm">
          Preencha o campo com o seu email cadastrado para recuperar sua conta!
        </p>
      </div>
      <form onSubmit={handleEmail} className="w-full">
        <label htmlFor="">
          E-mail
          <Input
            placeholder="emal@exemplo.com"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <Button className="w-full my-10" type="submit">
          {isLoading ? "...Carregando" : "Enviar"}
        </Button>
      </form>
      <div className="absolute bottom-11 bg-black text-red-600 p-2 rounded-e-lg">
        {error ? error : ""}
      </div>
    </div>
  );
}
