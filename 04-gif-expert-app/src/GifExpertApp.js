import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    setCategories([...categories, `${new Date().getTime()}-${categories.length + 1}`]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={setCategories}></CategoryAdd>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
