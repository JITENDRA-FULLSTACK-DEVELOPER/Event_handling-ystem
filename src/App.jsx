// App.js
import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import Filter from "./components/Filter";
import "./App.css"; // Import the CSS file

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = (event) => {
    setEvents(events.filter((e) => e !== event));
    setSelectedEvent(null);
  };

  const handleEdit = (event) => {
    // Implement edit functionality
  };

  const handleFilter = (date) => {
    // Implement filtering logic
  };

  return (
    <div className="container">
      <h1>Event Scheduler</h1>
      <EventForm addEvent={addEvent} />
      <Filter onFilter={handleFilter} />
      <EventList events={events} onEventClick={handleEventClick} />
      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
