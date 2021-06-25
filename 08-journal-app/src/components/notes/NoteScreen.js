import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange] = useForm(note);

  const { body, title, url } = formValues;

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className="notes__textarea"
          placeholder="How do you feel today?"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {url && (
          <div className="notes__image">
            <img
              src="https://get.wallhere.com/photo/night-galaxy-space-sky-stars-Milky-Way-alone-atmosphere-spiral-galaxy-astronomy-midnight-star-darkness-outer-space-astronomical-object-geological-phenomenon-21653.jpg"
              alt="landscape_image"
            />
          </div>
        )}
      </div>
    </div>
  );
};
