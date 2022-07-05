import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, index }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 key={`h3${index}`}>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} img={img}></GifGridItem>
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
