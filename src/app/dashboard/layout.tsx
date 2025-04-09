"use client";

import { NavItems } from "@/components/dashboard/nav-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { ReactNode, useState } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  const [showAside, setShowAside] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full h-screen grid grid-rows-[80px_1fr] bg-slate-50",
        showAside && "md:grid-cols-[300px_1fr]"
      )}
    >
      {/* Overlay (só aparece se aside estiver aberto) */}
      {showAside && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:bg-transparent"
          onClick={() => setShowAside(false)}
        />
      )}

      {/* Sidebar */}
      {showAside && (
        <aside
          className={cn(
            "md:row-span-2 md:w-full w-64 sm:w-72 h-full md:relative flex-col items-center border-r border-black/5 absolute bg-emerald-50 z-50"
          )}
        >
          <div className="h-full flex flex-col justify-between w-full">
            <div className="flex flex-col gap-10">
              <div className="w-full h-20 flex items-center justify-center border-b border-black/5">
                <h1>logo</h1>
              </div>

              <NavItems onItemClick={() => setShowAside(false)} />
            </div>
            <div className="gap-10 flex flex-col">
              <footer className="border-t border-black/5 h-20 flex items-center justify-center">
                <p>Footer</p>
              </footer>
            </div>
          </div>
        </aside>
      )}

      {/* Botão flutuante para abrir/fechar o menu */}
      <Button
        className="rounded-none rounded-e-xl absolute bottom-25 z-50"
        onClick={() => setShowAside(!showAside)}
      >
        {!showAside ? "Navegador" : "Fechar navegador"}
        {!showAside ? <PanelLeftOpen /> : <PanelRightOpen />}
      </Button>

      {/* Header */}
      <header className="h-full border-b border-black/5 flex items-center px-6">
        <h1 className="text-xl font-bold">Header</h1>
      </header>

      {/* Main content */}
      <main className="overflow-auto p-6 flex flex-col w-full h-full">
        {children}
      </main>
    </div>
  );
}
