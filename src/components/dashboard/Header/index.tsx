import { useUser } from "@/hooks/useUser";

const HeaderDashboard = () => {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) return null;

  return (
    <header className="h-full border-b border-black/5 flex items-center px-6 pt-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-bold">Header</h1>
        <p className="font-medium">
          {user?.clinic?.nome ? user?.clinic?.nome : "Usuário"}
        </p>
      </div>
    </header>
  );
};

export default HeaderDashboard;
