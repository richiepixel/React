import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
// const img =
//   'url(https://www.hola.com/imagenes/estar-bien/20200831174373/razas-de-perro-mas-populares-pug-carlino/0-859-976/carlino-o-pug-a.jpg)';

export const JournalEntry = (note) => {
  const { id, date, title, body, url } = note;
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, note));
  };

  return (
    <div className="journal__entry" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};
