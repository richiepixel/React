import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  }

  const handleSubstract = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubstract}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;