"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  MdHomeWork,
  MdPeople,
  MdPerson,
  MdEvent,
  MdAssignment,
  MdBarChart,
  MdSettings,
} from "react-icons/md";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

type NavItemsProps = {
  onItemClick?: () => void;
};

export const NavItems = ({ onItemClick }: NavItemsProps) => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: MdHomeWork, path: "/dashboard" },
    { label: "Funcionários", icon: MdPeople, path: "/dashboard/funcionarios" },
    { label: "Pacientes", icon: MdPerson, path: "/dashboard/pacientes" },
    { label: "Agenda", icon: MdEvent, path: "/dashboard/agenda" },
    {
      label: "Atendimentos",
      icon: MdAssignment,
      path: "/dashboard/atendimentos",
    },
    { label: "Relatórios", icon: MdBarChart, path: "/dashboard/relatorios" },
    {
      label: "Configurações",
      icon: MdSettings,
      path: "/dashboard/configuracoes",
    },
  ];

  return (
    <nav className="w-full flex flex-col gap-4 py-4 px-2 ">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path);
        return (
          <Link key={item.label} href={item.path} onClick={onItemClick}>
            <Button
              variant="ghost"
              className={cn(
                "w-full gap-2 justify-start hover:bg-black/10",
                isActive && "bg-sky-800 text-white"
              )}
            >
              {<item.icon size={16} />}
              <p>{item.label}</p>
            </Button>
          </Link>
        );
      })}
      <LogoutButton />
    </nav>
  );
};
