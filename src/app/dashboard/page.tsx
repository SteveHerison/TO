"use client";

import CalendarApp from "@/components/dashboard/Calendar";
import { ShowModalAgendar } from "@/components/Modal/showModalAgenda";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contexts/userContext";
import { useContext, useState } from "react";

export default function DashboardGeralPage() {
  const { user } = useContext(UserContext)!;
  const [showModalAgenda, setShowModalAgenda] = useState(false);

  function agendar() {
    setShowModalAgenda(!showModalAgenda);
  }

  return (
    <div className="flex flex-col gap-4 relative">
      {showModalAgenda && (
        <ShowModalAgendar setShowModalAgenda={setShowModalAgenda} />
      )}

      <div className="h-40 w-full bg-white p-2 flex items-center border rounded-lg">
        <h1>Mapa para se localizar e entender as cores</h1>
      </div>
      {user?.tipo === "ADMIN" && (
        <div className="w-full flex items-end justify-end">
          <Button onClick={agendar}>Agendar</Button>
        </div>
      )}
      <CalendarApp />
    </div>
  );
}
