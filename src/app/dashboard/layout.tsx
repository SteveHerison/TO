"use client";

import { useRef, useState } from "react";
import { NavItems } from "@/components/dashboard/nav-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { useUser } from "@/hooks/useUser";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  const [showAside, setShowAside] = useState(false);
  const { user } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Carregando usuário...</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full h-screen grid grid-rows-[80px_1fr] bg-slate-50",
        showAside && "md:grid-cols-[300px_1fr]"
      )}
    >
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
      <div>
        <div className="fixed flex items-center justify-center bg-black text-white top-0 left-0 w-full p-1">
          <div className="flex items-center gap-1">
            <h3 className="text-lg">Você está no teste.</h3>
            <span className="font-semibold hover:border-b cursor-pointer">
              Faça sua compra!
            </span>
          </div>
        </div>
        {showAside && <div className="" onClick={() => setShowAside(false)} />}
        <header className="h-full border-b border-black/5 flex items-center px-6 pt-10">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-bold">Header</h1>
            <p className="font-medium">
              {user?.clinic?.nome ? (
                user.clinic.nome
              ) : (
                <span className="animate-pulse">Carregando clínica...</span>
              )}
            </p>
          </div>
        </header>
      </div>
      <main className="overflow-auto p-6 flex flex-col w-full h-full">
        {children}
      </main>
    </div>
  );
}
