"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { useFeriados } from "@/hooks/useFeriados";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createCalendarConfig } from "./calendarConfig";

import "@schedule-x/theme-default/dist/index.css";

function CalendarApp() {
  const eventsService = createEventsServicePlugin();

  const calendar = useNextCalendarApp(createCalendarConfig(eventsService));

  useFeriados(calendar);

  return (
    <div className="w-full max-w-full h-full">
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
