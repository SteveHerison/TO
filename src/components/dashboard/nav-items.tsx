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
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";

type NavItemsProps = {
  onItemClick?: () => void;
};

export const NavItems = ({ onItemClick }: NavItemsProps) => {
  const pathname = usePathname();
  const { user } = useContext(UserContext)!;

  const navItems = [
    {
      label: "Home",
      icon: MdHomeWork,
      path: "/dashboard",
      roles: ["ADMIN", "FUNCIONARIO"],
    },
    {
      label: "Funcionários",
      icon: MdPeople,
      path: "/dashboard/funcionarios",
      roles: ["ADMIN"],
    },
    {
      label: "Pacientes",
      icon: MdPerson,
      path: "/dashboard/pacientes",
      roles: ["ADMIN"],
    },
    {
      label: "Agenda",
      icon: MdEvent,
      path: "/dashboard/agenda",
      roles: ["ADMIN"],
    },
    {
      label: "Atendimentos",
      icon: MdAssignment,
      path: "/dashboard/atendimentos",
      roles: ["ADMIN", "FUNCIONARIO"],
    },
    {
      label: "Relatórios",
      icon: MdBarChart,
      path: "/dashboard/relatorios",
      roles: ["ADMIN", "FUNCIONARIO"],
    },
    {
      label: "Configurações",
      icon: MdSettings,
      path: "/dashboard/configuracoes",
      roles: ["ADMIN"],
    },
  ];
  const filteredNavItems = navItems.filter(
    (item) => user?.tipo !== undefined && item.roles.includes(user.tipo)
  );

  return (
    <nav className="w-full flex flex-col gap-4 py-4 px-2">
      {filteredNavItems.map((item) => {
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
              <item.icon size={16} />
              <p>{item.label}</p>
            </Button>
          </Link>
        );
      })}
      <LogoutButton />
    </nav>
  );
};
