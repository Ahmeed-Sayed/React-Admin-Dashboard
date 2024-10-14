import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Box, Typography } from "@mui/material";
import { EventType } from "../../utils/interfaces";
export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState<EventType[]>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box display="flex">
      <Box
        flex="1 1 20%"
        bgcolor="background.paper"
        mr={2}
        borderRadius={2}
        p={2}
      >
        <Typography variant="h4" mb={2}>
          Events
        </Typography>
        {currentEvents.map((event: any) => (
          <Box key={event.id} p={2} mb={2} bgcolor="secondary.main">
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="body2">{event.startStr}</Typography>
          </Box>
        ))}
      </Box>
      <Box flex="1 1 100%">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          selectable={true}
          editable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2024-10-14",
              allDay: true,
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2024-10-28",
              allDay: true,
            },
          ]}
          eventsSet={(events: any) => setCurrentEvents(events)}
          select={handleDateClick}
          eventClick={handleEventClick}
        />
      </Box>
    </Box>
  );
}
