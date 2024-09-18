// EventDetails.js
import React from "react";

const EventDetails = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-details">
      <h2>{event.eventName}</h2>
      <p>
        {event.date} {event.time}
      </p>
      <p>{event.description}</p>
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event)}>Delete</button>
    </div>
  );
};

export default EventDetails;
