const rawEvents = [
  {
    id: 1,
    title: "Consulta - João",
    start: "2025-04-08 09:00",
    end: "2025-04-08 10:00",
    status: "agendado",
    description: "dfagasdf",
    location: "sadfasdfasdf",
    calendarId: "leisure",
  },
  {
    id: 2,
    title: "Consulta - Maria",
    start: "2025-04-25 10:30",
    end: "2025-04-25 11:30",
    description: "Consulta",
    location: "sdafsdafasd",
    status: "cancelado",
    calendarId: "leisure",
  },
  {
    id: 3,
    title: "Consulta - Carlos",
    start: "2025-04-08 14:00",
    end: "2025-04-08 15:00",
    description: "dfagasdf",
    location: "sadfasdfasdf",
    status: "cancelado",
    calendarId: "leisure",
  },
];

export const events = rawEvents.map((event) => {
  return {
    ...event,
  };
});
