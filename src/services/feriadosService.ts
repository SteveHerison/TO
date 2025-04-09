import axios from "axios";
import { Feriado } from "@/types/feriadosCalendar";

export async function fetchFeriados(): Promise<Feriado[]> {
  const currentYear = new Date().getFullYear();
  const response = await axios.get(
    `https://brasilapi.com.br/api/feriados/v1/${currentYear}`
  );
  return response.data;
}
