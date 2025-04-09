import { useEffect } from "react";
import { fetchFeriados } from "@/services/feriadosService";
import { useNextCalendarApp } from "@schedule-x/react"; // necessário para tipar corretamente

type CalendarType = ReturnType<typeof useNextCalendarApp>;

export function useFeriados(calendar: CalendarType) {
  useEffect(() => {
    async function carregarFeriados() {
      if (!calendar || !calendar.events) return; // <- prevenção de erro
      try {
        const feriados = await fetchFeriados();
        const formatados = feriados.map((feriado, index) => ({
          id: `feriado-${index}`,
          title: `🎉 ${feriado.name}`,
          allDay: true,
          start: `${feriado.date} 00:00`,
          end: `${feriado.date} 23:59`,
          description: `Feriado nacional (${feriado.type})`,
        }));

        calendar.events.set([...calendar.events.getAll(), ...formatados]);
      } catch (error) {
        console.error("Erro ao carregar feriados:", error);
      }
    }

    carregarFeriados();
  }, [calendar]);
}
