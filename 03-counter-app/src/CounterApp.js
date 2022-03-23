import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value || 0); // []

  console.log(counter);
  console.log(setCounter);

  // handleAdd
  const handleAdd = (e) => {
    console.log(e);
    // setCounter(counter + 1);
    setCounter((c) => {
      return c + 1;
    });
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      {/* <button
        onClick={(e) => {
          handleAdd(e);
        }}
      >
        +1
      </button> */}

      {/* <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        +1
      </button> */}

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
