import React from "react";
import { Button } from "../../ui/button";
import { PencilRuler } from "lucide-react";

export const TableFunconario = () => {
  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left px-4 py-2 font-medium text-gray-600">
            Nome
          </th>
          <th className="text-left px-4 py-2 font-medium hidden lg:table-cell text-gray-600">
            Cargo
          </th>
          <th className="text-left px-4 py-2 font-medium text-gray-600 hidden lg:table-cell">
            Especialidade
          </th>
          <th className="text-left px-4 py-2 font-medium text-gray-600 hidden lg:table-cell">
            E-mail
          </th>
          <th className="text-left px-4 py-2 font-medium text-gray-600 hidden lg:table-cell">
            Telefone
          </th>
          <th className="text-left px-4 py-2 font-medium text-gray-600">
            Status
          </th>
          <th className="text-left px-4 py-2 font-medium text-gray-600">
            Ações
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="border-t">
          <td className="px-4 py-2 font-semibold">Dra. Ana Silva</td>
          <td className="px-4 py-2">Terapeuta Ocupacional</td>
          <td className="px-4 py-2 hidden lg:table-cell ">
            Reabilitação Neurológica
          </td>
          <td className="px-4 py-2 hidden lg:table-cell">
            ana.silva@clinica.com
          </td>
          <td className="px-4 py-2 hidden lg:table-cell">(11) 98765-4321</td>
          <td className="px-4 py-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Ativo
            </span>
          </td>
          <td className="px-4 py-2 hidden md:table-cell">
            <div className="group relative">
              <Button className="text-gray-500 hover:text-gray-700">
                <PencilRuler />
              </Button>
              <span
                className="absolute -top-10 left-4 -translate-x-[50%] 
          z-20 origin-left scale-0 px-3 rounded-lg border 
          border-gray-300 bg-white py-2 text-sm font-bold
          shadow-md transition-all duration-300 ease-in-out 
          group-hover:scale-100"
              >
                Editar
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
