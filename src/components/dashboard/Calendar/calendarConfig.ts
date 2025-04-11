"use client";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";

import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { dateFormats } from "@/utils/dateFormats";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createResizePlugin } from "@schedule-x/resize";
import { createCurrentTimePlugin } from "@schedule-x/current-time";
import "@schedule-x/theme-shadcn/dist/index.css";
import { translations, mergeLocales } from "@schedule-x/translations";

import { customPtBR } from "./translations";
import { events } from "./events";

type EventsServiceType = ReturnType<typeof createEventsServicePlugin>;

export function createCalendarConfig(eventsService: EventsServiceType) {
  return {
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    locale: "pt-BR",
    firstDayOfWeek: 1,
    calendarOptions: {
      selectedDate: new Date().toISOString().split("T")[0],
      locale: "pt-BR",
      translations: mergeLocales(translations, {
        ptBR: customPtBR,
      }),
      formats: dateFormats,
    },
    dayBoundaries: {
      start: "07:00",
      end: "22:00",
    },
    events,
    theme: "shadcn",
    plugins: [
      eventsService,
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      createResizePlugin(15),
      createCurrentTimePlugin({ fullWeekWidth: true }),
    ],
  };
}
