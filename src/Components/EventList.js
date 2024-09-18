import React from "react";

const EventList = ({ events, onEventClick }) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index} onClick={() => onEventClick(event)}>
          {event.eventName} - {event.date} {event.time}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
