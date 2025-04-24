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
            <Input />
          </form>
        </div>
      </div>
    </div>
  );
};
