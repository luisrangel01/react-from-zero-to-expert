import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      // props.setCategories((categories) => [...categories, `${inputValue}`]);
      props.setCategories((categories) => [`${inputValue}`, ...categories]);
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="form">
        <input type='text' value={inputValue} onChange={handleInputChange}></input>
      </form>
    </>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
