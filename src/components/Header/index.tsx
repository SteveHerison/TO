"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="h-24 flex items-center container mx-auto px-2">
      <div className="flex w-full items-center justify-between">
        <h1>Header</h1>

        <ul className="flex items-center space-x-4">
          <li className="text-lg font-semibold hover:text-blue-700 transition-all hover:border-b-4 cursor-pointer border-blue-800">
            Sobre
          </li>
          <li className="text-lg font-semibold hover:text-blue-700 transition-all hover:border-b-4 cursor-pointer border-blue-800">
            Planos
          </li>
          <li className="text-lg font-semibold hover:text-blue-700 transition-all hover:border-b-4 cursor-pointer border-blue-800">
            Contato
          </li>
          <li>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </li>
          <li>
            <Link href="/cadastro">
              <Button>Cadastro</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
