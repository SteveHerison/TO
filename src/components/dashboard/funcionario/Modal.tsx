import { X } from "lucide-react";
import { InputComponent } from "../../Input";
import { Button } from "../../ui/button";

type NavItemsProps = {
  onItemClick?: () => void;
};

const inputFields = [
  { id: "nome", label: "Nome", type: "text", place: "Nome do funcionario" },
  { id: "email", label: "E-mail", type: "email", place: "Email@exemplo.com" },
  { id: "telefone", label: "Telefone", type: "text", place: "00 00000 0000" },
  { id: "cpf", label: "CPF", type: "text", place: "00000000000" },
  { id: "endereco", label: "Endereço", type: "text", place: "Rua/Av exemplo" },
  { id: "cidade", label: "Cidade", type: "text", place: "Cidade" },
  { id: "estado", label: "Estado", type: "text", place: "Estado" },
  { id: "cep", label: "CEP", type: "text", place: "0000000" },
];

export const Modal = ({ onItemClick }: NavItemsProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      {/* Fundo escurecido */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

      {/* Conteúdo do modal */}
      <section className="relative w-full max-w-4xl  max-h-[700px] h-full bg-white shadow-2xl rounded-lg p-2 z-50 flex flex-col gap-6">
        <X className="absolute right-2 top-2 w-10 h-10" onClick={onItemClick} />

        <h1 className="text-xl font-bold">Modal</h1>
        <form className="w-full h-full border p-2 rounded-lg flex flex-col">
          {inputFields.map((field) => (
            <InputComponent
              key={field.id}
              type={field.type}
              label={field.label}
              name={field.id}
              place={field.place}
            />
          ))}
          <div className="h-full flex items-center justify-between">
            <Button>Adicionar</Button>
            <Button>Cancelar</Button>
            <Button>Editar</Button>
            <Button>Excluir</Button>
          </div>
        </form>
      </section>
    </div>
  );
};
