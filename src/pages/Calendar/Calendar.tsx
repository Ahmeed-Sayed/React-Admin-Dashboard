/**
 * Calendar Component
 *
 * This component implements a full-featured calendar using FullCalendar and Material-UI.
 * It allows users to view, add, and delete events in various calendar views.
 *
 * Key features:
 * - Display events in month, week, day, and list views
 * - Add new events through a modal form
 * - Delete events with confirmation
 * - Show a sidebar with a list of current events
 *
 * Implementation approach:
 * 1. State Management:
 *    - Use React useState for local state (modalOpen, selectedDate, currentEvents)
 *    - Rely on FullCalendar's internal state for calendar events
 *
 * 2. Event Handling:
 *    - Add events: Open a modal with a form, submit to add to FullCalendar
 *    - Delete events: Confirm via dialog, then remove from FullCalendar
 *    - Update currentEvents state using FullCalendar's eventsSet callback
 *
 * 3. Date Formatting:
 *    - Use a custom safeFormatDate function to handle various date input types
 *    - Ensure consistent date display across the application
 *
 * 4. Error Handling:
 *    - Implement error checking in date formatting to prevent rendering issues
 *    - Use TypeScript for type checking and to catch potential errors early
 *
 * 5. Performance Considerations:
 *    - Rely on FullCalendar's optimized rendering for large sets of events
 *    - Minimize state updates by using FullCalendar's built-in event management
 *
 * Note: Ensure all required dependencies are installed, including @fullcalendar packages,
 * @mui components, formik, and yup for form handling and validation.
 */

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { EventType } from "../../utils/interfaces";
import CustomModal from "../../components/CustomModal/CustomModal.tsx";
import { Formik } from "formik";
import * as Yup from "yup";
import PageHeader from "../../components/PageHeader/PageHeader.tsx";
import { tokens } from "../../utils/theme.tsx";
import "./Calendar.scss";
/**
 * Initial values for the event creation form
 */
const initialValues: {
  title: string;
  endDate: string; // Change type to string for consistency
} = {
  title: "",
  endDate: new Date().toISOString().split("T")[0], // Set to today's date in string format
};

const eventValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(new Date(), "End date must be today or later"),
});

// Helper function for safe date formatting
function safeFormatDate(date: any): string {
  if (date instanceof Date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (typeof date === "string") {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else {
    return "Invalid Date";
  }
}

/**
 * Calendar component that displays a full-featured calendar with events.
 * Uses FullCalendar for rendering and MUI for layout and styling.
 */
export default function Calendar() {
  const theme = useTheme();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [currentEvents, setCurrentEvents] = useState<EventType[]>([]);
  const [eventToDelete, setEventToDelete] = useState<any>(null);
  const colors = tokens(theme.palette.mode);
  /**
   * Handles form submission for creating a new event
   * @param values - Form values containing event details
   */
  const handleFormSubmit = (values: typeof initialValues) => {
    if (values.title && selectedDate) {
      const newEvent: EventType = {
        id: `${selectedDate.dateStr}-${values.title}`,
        title: values.title,
        start: selectedDate.startStr,
        end: values.endDate,
        allDay: true,
      };

      // Add the event to FullCalendar
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();
      calendarApi.addEvent(newEvent);

      setAddModalOpen(false);
    }
  };

  /**
   * Handles click on a date to open the modal for adding a new event.
   * @param selected - Information about the selected date/time slot.
   */
  const handleDateClick = (selected: any) => {
    setAddModalOpen(true);
    setSelectedDate(selected);
    initialValues.endDate = selected.endStr;
  };

  /**
   * Handles the deletion of an event
   */
  const handleDeleteEvent = () => {
    if (eventToDelete) {
      eventToDelete.remove();
      setDeleteModalOpen(false);
      setEventToDelete(null);
    }
  };

  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>

      <PageHeader title="Calendar" subTitle="Full Calendar Interactive Page" />
      <Box display="flex">
        {/* CustomModal for adding events */}
        <CustomModal
          title="Add Event"
          open={addModalOpen}
          onClose={() => setAddModalOpen(false)}
        >
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={eventValidationSchema}
          >
            {({
              handleBlur,
              touched,
              errors,
              handleChange,
              handleSubmit,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap="1.5rem">
                  <TextField
                    id="title"
                    name="title"
                    label="Event Title"
                    fullWidth
                    required
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.title && !!errors.title}
                    helperText={touched.title && errors.title}
                  />

                  <TextField
                    id="endDate"
                    name="endDate"
                    label="End Date"
                    type="date"
                    fullWidth
                    required
                    value={values.endDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.endDate && !!errors.endDate}
                    helperText={touched.endDate && errors.endDate}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="1rem" gap="1rem">
                  <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Create New Event
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => setAddModalOpen(false)}
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </CustomModal>

        {/* CustomModal for deleting events */}
        <CustomModal
          title="Delete Event"
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        >
          <Typography my={3} component="p" gutterBottom>
            Are you sure you want to delete the event '{eventToDelete?.title}'?
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              onClick={() => setDeleteModalOpen(false)}
              color="primary"
              sx={{ mr: 1, fontSize: "0.8rem" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteEvent}
              color="error"
              variant="contained"
              sx={{ fontSize: "0.8rem" }}
            >
              Delete
            </Button>
          </Box>
        </CustomModal>

        {/* Sidebar to display list of events */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.blueAccent[600]}
          mr={2}
          borderRadius={2}
          p={2}
          height="80vh"
          overflow="auto"
        >
          <Typography variant="h4" mb={2} textAlign="center" color="white">
            Events
          </Typography>
          {currentEvents.map((event: EventType) => {
            return (
              <Box
                key={`${event.id}-${event.start}`}
                p={2}
                mb={2}
                bgcolor={colors.primary[400]}
                borderRadius={1}
              >
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2">
                  {safeFormatDate(event.start)}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Main calendar component */}
        <Box flex="1 1 100%" bgcolor={colors.blueAccent[700]} p={2} color="white">
          <FullCalendar
            height="75vh"
            plugins={[
              // Specifies the plugins to be used with FullCalendar
              dayGridPlugin, // Enables the month view with day grid
              interactionPlugin, // Allows for user interactions like selecting and dragging events
              timeGridPlugin, // Enables the week and day views with time slots
              listPlugin, // Enables the list view for displaying events
            ]}
            initialView="dayGridMonth" // Sets the initial view of the calendar to month view
            headerToolbar={{
              // Configures the toolbar at the top of the calendar
              start: "prev,next today", // Buttons for navigating to previous, next, and today's date
              center: "title", // Displays the title of the current view in the center
              end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // Buttons for switching between different views
            }}
            selectable={true} // Enables selection of date/time slots
            editable={true} // Allows events to be edited (moved/resized)
            selectMirror={true} // Displays a mirror of the selected date/time slot while dragging
            dayMaxEvents={true} // Limits the number of events displayed per day in the day view
            eventsSet={(events) => setCurrentEvents(events)} // Callback to update the current events state when events are set
            select={handleDateClick} // Callback function to handle date selection
            eventClick={(clickInfo) => {
              // Callback function to handle event clicks
              setEventToDelete(clickInfo.event); // Sets the event to be deleted
              setDeleteModalOpen(true); // Opens the delete confirmation modal
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
