import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ img, title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn animate__delay-2s'>
      <img src={url ?? img.url} alt={title ?? img.title}></img>
      <p>{title ?? img.title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  // title: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

GifGridItem.defaultProps = {
  img: { url: '', title: '' },
};
