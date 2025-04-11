const rawEvents = [
  {
    id: 1,
    title: "Consulta - João",
    start: "2025-04-08 09:00",
    end: "2025-04-08 10:00",
    status: "agendado",
  },
  {
    id: 2,
    title: "Consulta - Maria",
    start: "2025-04-08 10:30",
    end: "2025-04-08 11:30",
    status: "atendido",
  },
  {
    id: 3,
    title: "Consulta - Carlos",
    start: "2025-04-08 14:00",
    end: "2025-04-08 15:00",
    status: "cancelado",
  },
];

export const events = rawEvents.map((event) => {
  let cssClass = "";

  switch (event.status) {
    case "agendado":
      cssClass = "bg-blue-500 text-white";
      break;
    case "atendido":
      cssClass = "bg-green-500 text-white";
      break;
    case "cancelado":
      cssClass = "bg-red-500 text-white line-through";
      break;
    default:
      cssClass = "bg-gray-400 text-white";
  }

  return {
    ...event,
    cssClass,
  };
});
