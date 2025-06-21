import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  funcionarioSchema,
  FuncionarioFormData,
} from "@/schemas/funcionarioSchema"; // ajuste o caminho se necessário
import { X } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";

type NavItemsProps = {
  onItemClick?: () => void;
};

const inputFields = [
  { id: "nome", label: "Nome", type: "text", place: "Nome do funcionário" },
  { id: "email", label: "E-mail", type: "email", place: "email@exemplo.com" },
  { id: "cpf", label: "CPF", type: "text", place: "00000000000" },
  { id: "telefone", label: "Telefone", type: "text", place: "00 00000 0000" },
  { id: "cargo", label: "Cargo", type: "text", place: "Cargo" },
  {
    id: "especialidade",
    label: "Especialidade",
    type: "text",
    place: "Área de atuação",
  },
  { id: "endereco", label: "Endereço", type: "text", place: "Rua/Av exemplo" },
  { id: "cep", label: "CEP", type: "text", place: "0000000" },
  { id: "cidade", label: "Cidade", type: "text", place: "Cidade" },
  { id: "estado", label: "Estado", type: "text", place: "Estado" },
];

export const Modal = ({ onItemClick }: NavItemsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FuncionarioFormData>({
    resolver: zodResolver(funcionarioSchema),
  });

  const onSubmit = (data: FuncionarioFormData) => {
    console.log("Dados validados:", data);
    reset();
    onItemClick?.();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

      <section className="relative w-full py-4 max-w-4xl  bg-white shadow-2xl rounded-lg p-2 z-50 flex flex-col gap-6 ">
        <X
          className="absolute right-2 top-2 w-10 h-10 cursor-pointer"
          onClick={onItemClick}
        />

        <h1 className="text-xl font-bold">Cadastrar Funcionário</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full border p-2 rounded-lg flex flex-col gap-3 overflow-y-auto"
        >
          {inputFields.slice(0, 4).map((field) => (
            <label key={field.id} className="flex flex-col gap-1">
              {field.label}
              <Input
                type={field.type}
                placeholder={field.place}
                {...register(field.id as keyof FuncionarioFormData)}
              />
              {errors[field.id as keyof FuncionarioFormData] && (
                <span className="text-sm text-red-500">
                  {errors[
                    field.id as keyof FuncionarioFormData
                  ]?.message?.toString()}
                </span>
              )}
            </label>
          ))}

          <div className="flex gap-4">
            {inputFields.slice(4, 6).map((field) => (
              <label key={field.id} className="flex flex-col gap-1 w-1/2">
                {field.label}
                <Input
                  type={field.type}
                  placeholder={field.place}
                  {...register(field.id as keyof FuncionarioFormData)}
                />
                {errors[field.id as keyof FuncionarioFormData] && (
                  <span className="text-sm text-red-500">
                    {errors[
                      field.id as keyof FuncionarioFormData
                    ]?.message?.toString()}
                  </span>
                )}
              </label>
            ))}
          </div>

          <div className="flex gap-4">
            {inputFields.slice(6, 8).map((field, index) => (
              <label
                key={field.id}
                className={`flex flex-col gap-1 ${
                  index === 0 ? "w-3/4" : "w-1/4"
                }`}
              >
                {field.label}
                <Input
                  type={field.type}
                  placeholder={field.place}
                  {...register(field.id as keyof FuncionarioFormData)}
                />
                {errors[field.id as keyof FuncionarioFormData] && (
                  <span className="text-sm text-red-500">
                    {errors[
                      field.id as keyof FuncionarioFormData
                    ]?.message?.toString()}
                  </span>
                )}
              </label>
            ))}
          </div>

          {inputFields.slice(8).map((field) => (
            <label key={field.id} className="flex flex-col gap-1">
              {field.label}
              <Input
                type={field.type}
                placeholder={field.place}
                {...register(field.id as keyof FuncionarioFormData)}
              />
              {errors[field.id as keyof FuncionarioFormData] && (
                <span className="text-sm text-red-500">
                  {errors[
                    field.id as keyof FuncionarioFormData
                  ]?.message?.toString()}
                </span>
              )}
            </label>
          ))}

          <div className="flex items-center justify-between mt-4">
            <Button type="submit">Cadastrar</Button>
            <Button type="button" onClick={onItemClick}>
              Cancelar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};
