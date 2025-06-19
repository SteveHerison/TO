import { Input } from "../ui/input";

type showModalAgendaType = {
  setShowModalAgenda: (value: boolean) => void;
};

export const ShowModalAgendar = ({
  setShowModalAgenda,
}: showModalAgendaType) => {
  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50 px-2">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative">
        <p
          className="absolute top-0 right-2 text-2xl cursor-pointer"
          onClick={() => setShowModalAgenda(false)}
        >
          x
        </p>
        <h2 className="text-xl font-semibold mb-4">ModalSucesso</h2>
        <div>
          <form action="">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="my-2">
                <p>Paciente</p>
                <Input placeholder="Nome do paciente" />
              </label>
              <label htmlFor="" className="my-2">
                <p>Atendimento</p>
                <Input placeholder="Tipo do atendimento" />
              </label>

              <label htmlFor="" className="my-2">
                <span className="flex items-center">
                  <p className="flex items-center">Funcionário.</p>
                  <p className="text-sm">Opc</p>
                </span>
                <Input placeholder="Quem vai atender?" />
              </label>
            </div>

            <div className="flex gap-2 my-2 w-full">
              <label htmlFor="" className="w-full">
                <p>Endereço</p>
                <Input placeholder="Rua/Av Exemplo" />
              </label>

              <label htmlFor="" className="">
                Numero
                <Input />
              </label>
            </div>
            <label htmlFor="" className="">
              Cep
              <Input />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
