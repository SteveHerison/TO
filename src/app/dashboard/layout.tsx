"use client";

import { useRef, useState } from "react";
import { NavItems } from "@/components/dashboard/nav-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { UserContextProvider } from "@/contexts/userContext";
import { useUser } from "@/hooks/useUser";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <UserContextProvider>
      <DashboardLayoutUI>{children}</DashboardLayoutUI>
    </UserContextProvider>
  );
}

function DashboardLayoutUI({ children }: DashboardLayoutProps) {
  const [showAside, setShowAside] = useState(false);
  const { user } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "relative w-full h-screen grid grid-rows-[80px_1fr] bg-slate-50",
        showAside && "md:grid-cols-[300px_1fr]"
      )}
    >
      {showAside && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:bg-transparent"
          onClick={() => setShowAside(false)}
        />
      )}

      {showAside && (
        <aside className="md:row-span-2 md:w-full w-64 sm:w-72 h-full md:relative flex-col items-center border-r border-black/5 absolute bg-emerald-50 z-50">
          <div className="h-full flex flex-col justify-between w-full">
            <div className="flex flex-col gap-10">
              <div className="w-full h-20 flex items-center justify-center border-b border-black/5">
                {!fileInputRef ? <Image src="" alt="Foto de perfil" /> : "Foto"}
              </div>
              <NavItems onItemClick={() => setShowAside(false)} />
            </div>
            <footer className="border-t border-black/5 h-20 flex items-center justify-center">
              <p>Footer</p>
            </footer>
          </div>
        </aside>
      )}

      <Button
        className="rounded-none rounded-e-xl absolute bottom-25 z-50"
        onClick={() => setShowAside(!showAside)}
      >
        {!showAside ? "Navegador" : "Fechar navegador"}
        {!showAside ? <PanelLeftOpen /> : <PanelRightOpen />}
      </Button>

      <header className="h-full border-b border-black/5 flex items-center px-6">
        <h1 className="text-xl font-bold">Header</h1>
        <p className="font-medium">{user?.nome ?? "Usuário"}</p>
      </header>

      <main className="overflow-auto p-6 flex flex-col w-full h-full">
        {children}
      </main>
    </div>
  );
}
