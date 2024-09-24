import React from 'react';
import Event from './Event';

function EventList({ events }) {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
