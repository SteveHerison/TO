"use client";
import { FormCadastro } from "@/components/Form/FormCadastro";
import { ModalSucesso } from "@/components/Modal/ModalSucesso";
import { useState } from "react";

export default function SignUp() {
  const [isSucess, setIsSucess] = useState(false);
  return (
    <div>
      <h3 className="text-balance text-2xl font-semibold text-zinc-600">
        Onde a organização encontra a saúde.
      </h3>
      {isSucess ? <ModalSucesso /> : <FormCadastro setIsSucess={setIsSucess} />}
    </div>
  );
}
