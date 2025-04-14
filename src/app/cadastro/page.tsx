import { ComponentForm } from "@/components/form";

export default function SignUp() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_700px]">
      <div className="w-full h-full bg-red-300">Foto</div>

      <div className="w-full h-full justify-center  flex px-8 sm:px-20 md:px-4 lg:px-20 flex-col">
        <h2 className="text-4xl pb-4 font-semibold">HClinic</h2>
        <h3 className="text-balance text-2xl font-semibold text-zinc-600">
          Onde a organização encontra a saúde.
        </h3>

        <ComponentForm />
      </div>
    </div>
  );
}
