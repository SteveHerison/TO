"use client";
import { Modal } from "@/components/funcionario/Modal";
import { TableFunconario } from "@/components/funcionario/tableFunconario";
import { InputComponent } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

export default function Staff() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex flex-col h-full gap-5 relative">
      {showModal && <Modal onItemClick={() => setShowModal(false)} />}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-bold text-2xl">Funcionarios</h1>
          <p className="text-zinc-500">Gerenciar equipe da clínica</p>
        </div>

        <Button
          className="max-w-56 w-48"
          onClick={() => setShowModal(!showModal)}
        >
          <CirclePlus /> Adicionar Funcionário
        </Button>
      </div>
      <aside className="h-full border rounded-lg p-2 gap-4 flex flex-col">
        <div className="flex w-full justify-between gap-2 border p-4 rounded-lg">
          <InputComponent type="text" place="Buscar Funcionários" />
          <Button>Filtrar</Button>
        </div>
        <section className="border h-full rounded-lg">
          <TableFunconario />
        </section>
      </aside>
    </main>
  );
}
