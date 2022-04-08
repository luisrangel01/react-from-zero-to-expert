import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, index }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 key={`h3${index}`}>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {data.map((img) => (
          <GifGridItem key={img.id} img={img}></GifGridItem>
        ))}
      </div>
    </>
  );
};
