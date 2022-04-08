import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = (props) => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      // props.setCategories([...props.categories, `${inputValue}`]);
      props.setCategories((categories) => [...categories, `${inputValue}`]);
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleInputChange}></input>
      </form>
    </>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
};