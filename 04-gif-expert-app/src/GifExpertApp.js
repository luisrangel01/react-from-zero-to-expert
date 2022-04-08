import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={setCategories}></CategoryAdd>
      <hr />

      <ol>
        {categories.map((category, index) => {
          return <GifGrid key={category} category={category} index={index}></GifGrid>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
