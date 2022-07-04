import { render } from '@testing-library/react';
import React from 'react';

import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const img = {
    title,
    url,
  };

  test('debe de mostrar el componente correctamente', () => {
    const { container } = render(<GifGridItem img={img} />);
    expect(container).toMatchSnapshot();
  });
});
