"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

import { ReactNode } from "react";
import HeaderDashboard from "@/components/dashboard/Header";
import Navbar from "@/components/dashboard/NavBar";

import { useUser } from "@/hooks/useUser";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  const [showAside, setShowAside] = useState(false);
  const { isLoadingUser } = useUser();

  if (isLoadingUser)
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-50">
        <p className="text-xl font-semibold animate-pulse text-zinc-700">
          Carregando...
        </p>
      </div>
    );

  return (
    <div
      className={cn(
        "relative w-full h-screen grid grid-rows-[80px_1fr] bg-slate-50",
        showAside && "md:grid-cols-[300px_1fr]"
      )}
    >
      {showAside && <Navbar setShowAside={setShowAside} />}

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
        <HeaderDashboard />
      </div>
      <main className="overflow-auto p-6 flex flex-col w-full h-full">
        {children}
      </main>
    </div>
  );
}
