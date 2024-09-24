import React, { useState } from 'react';
import EventList from './EventList';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventTime) return;

    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: eventDate,
      time: eventTime,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setEventName('');
    setEventDate('');
    setEventTime('');
  };

  return (
    <div className="container">
      <h1>Agenda de Eventos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Evento"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <button type="submit">Adicionar Evento</button>
      </form>
      <EventList events={events} />
    </div>
  );
}

export default App;
