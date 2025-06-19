// components/Planos/Plan.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Api } from "@/providers";

type Plan = {
  id: number;
  nome: string;
  descricao: string;
  precoMensal: number;
  maxFuncionarios: number;
  maxPacientes: number;
  duracaoDias: number;
};

type PlanCardProps = {
  onSelect: (id: number) => void;
};

const PlanCard = ({ onSelect }: PlanCardProps) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await Api.get(`/plans`);
        setPlans(response.data);
      } catch (error) {
        console.error("Erro ao buscar planos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  if (loading) return <p>Carregando planos...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="border rounded-lg shadow p-4 flex flex-col items-start cursor-pointer hover:bg-gray-100 transition"
          onClick={() => onSelect(plan.id)}
        >
          <h2 className="text-xl font-bold mb-2">{plan.nome}</h2>
          <p className="text-sm mb-2">{plan.descricao}</p>
          <p>
            <strong>Preço:</strong> R${plan.precoMensal}
          </p>
          <p>
            <strong>Funcionários:</strong> até {plan.maxFuncionarios}
          </p>
          <p>
            <strong>Pacientes:</strong> até {plan.maxPacientes}
          </p>
          <p>
            <strong>Duração:</strong> {plan.duracaoDias} dias
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
