import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
        />
        <textarea
          className="notes__textarea"
          placeholder="How do you feel today?"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://get.wallhere.com/photo/night-galaxy-space-sky-stars-Milky-Way-alone-atmosphere-spiral-galaxy-astronomy-midnight-star-darkness-outer-space-astronomical-object-geological-phenomenon-21653.jpg"
            alt="landscape_image"
          />
        </div>
      </div>
    </div>
  );
};
