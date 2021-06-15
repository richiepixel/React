import React from 'react';

const img =
  'url(https://www.hola.com/imagenes/estar-bien/20200831174373/razas-de-perro-mas-populares-pug-carlino/0-859-976/carlino-o-pug-a.jpg)';

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: img,
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">Sint duis ea occaecat aliqua.</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>14</h4>
      </div>
    </div>
  );
};
