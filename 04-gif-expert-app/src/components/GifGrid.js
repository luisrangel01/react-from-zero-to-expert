import React, { useState, useEffect } from 'react';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, index }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=dUaEpCHLvbS1VDigGQT0Zp6ge5yepPT5`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  return (
    <>
      <h3 key={`h3${index}`}>{category}</h3>
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} img={img}></GifGridItem>
        ))}
      </div>
    </>
  );
};
