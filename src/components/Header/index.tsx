"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="h-full flex items-center container mx-auto px-4 lg:px-0">
      <div className="flex w-full items-center justify-between">
        <h1>Header</h1>

        <div className="flex gap-3">
          <Link href="/login">
            <Button>Login</Button>
          </Link>

          <Link href="/cadastro">
            <Button>Cadastro</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
