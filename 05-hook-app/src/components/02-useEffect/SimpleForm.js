import React, { useEffect, useState } from 'react';
import './css/effects.css';
import { Message } from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('formState cambió');
  }, [formState]);

  useEffect(() => {
    // console.log('email cambió');
  }, [email]);

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu correo electrónico"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === 'Richie' && <Message />}
    </>
  );
};

export default SimpleForm;
