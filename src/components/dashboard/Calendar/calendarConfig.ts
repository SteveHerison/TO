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
    timeAxisFormatOptions: { hour: "2-digit", minute: "2-digit" },
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
    calendars: {
      personal: {
        colorName: "personal",
        lightColors: {
          main: "#f9d71c",
          container: "#fff5aa",
          onContainer: "#594800",
        },
        darkColors: {
          main: "#fff5c0",
          onContainer: "#fff5de",
          container: "#a29742",
        },
      },
      work: {
        colorName: "work",
        lightColors: {
          main: "#f91c45",
          container: "#ffd2dc",
          onContainer: "#59000d",
        },
        darkColors: {
          main: "#ffc0cc",
          onContainer: "#ffdee6",
          container: "#a24258",
        },
      },
      leisure: {
        colorName: "leisure",
        lightColors: {
          main: "#1cf9b0",
          container: "#dafff0",
          onContainer: "#004d3d",
        },
        darkColors: {
          main: "#c0fff5",
          onContainer: "#e6fff5",
          container: "#42a297",
        },
      },
      school: {
        colorName: "school",
        lightColors: {
          main: "#1c7df9",
          container: "#d2e7ff",
          onContainer: "#002859",
        },
        darkColors: {
          main: "#c0dfff",
          onContainer: "#dee6ff",
          container: "#426aa2",
        },
      },
    },
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
