export const dateFormats = {
  time: (date: Date) =>
    new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date),

  slotLabel: (date: Date) =>
    new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date),

  monthHeader: (date: Date) =>
    new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
    }).format(date),

  weekdayLabel: (date: Date) =>
    new Intl.DateTimeFormat("pt-BR", {
      weekday: "short",
    }).format(date),

  dayNumber: (date: Date) => date.getDate().toString(),
};
