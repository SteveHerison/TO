"use client";

import { NavItems } from "@/components/dashboard/nav-items";
import Image from "next/image";
import { useRef } from "react";

type NavbarProps = {
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setShowAside }: NavbarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <aside className="md:row-span-2 md:w-full w-64 sm:w-72 h-full md:relative flex-col items-center border-r border-black/5 absolute bg-emerald-50 z-50">
      <div className="h-full flex flex-col justify-between w-full">
        <div className="flex flex-col gap-10">
          <div className="w-full h-20 flex items-center justify-center border-b border-black/5">
            {/* Aqui você pode colocar a imagem de perfil real depois */}
            {!fileInputRef ? <Image src="" alt="Foto de perfil" /> : "Foto"}
          </div>
          <NavItems onItemClick={() => setShowAside(false)} />
        </div>
        <footer className="border-t border-black/5 h-20 flex items-center justify-center">
          <p>Footer</p>
        </footer>
      </div>
    </aside>
  );
};

export default Navbar;
