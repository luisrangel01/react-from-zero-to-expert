// import React, { useState } from 'react';
// import { CategoryAdd } from './components/CategoryAdd';
// import { GifGrid } from './components/GifGrid';

// const GifExpertApp = () => {
//   const [categories, setCategories] = useState(['Dragon Ball']);

//   return (
//     <>
//       <h2>GifExpertApp</h2>
//       <CategoryAdd setCategories={setCategories}></CategoryAdd>
//       <hr />

//       <ol>
//         {categories.map((category, index) => {
//           return <GifGrid key={category} category={category} index={index}></GifGrid>;
//         })}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

import { useState } from 'react';
import { CategoryAdd, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Vegeta']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* <CategoryAdd setCategories={(value) => onAddCategory(value)} /> */}
      <CategoryAdd setCategories={setCategories}></CategoryAdd>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
