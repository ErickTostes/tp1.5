import React from 'react';

function Event({ event }) {
  // Função para formatar a data no padrão DD/MM/YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, '0')}/${String(
      date.getMonth() + 1
    ).padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <li className="event-item">
      <span>{event.name}</span>
      <span>{formatDate(event.date)}</span>
      <span>{event.time}</span>
    </li>
  );
}

export default Event;
