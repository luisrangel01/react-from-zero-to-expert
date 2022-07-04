import { render, screen } from '@testing-library/react';

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

  test('debe de mostrar la imagen con el URL y el alt indicado', () => {
    render(<GifGridItem img={img} />);
    // expect(screen.getByRole('img').src).toBe(img.url);
    // expect(screen.getByRole('img').alt).toBe(img.title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(img.url);
    expect(alt).toBe(img.title);
  });

  test('debe de mostrar el titulo', () => {
    render(<GifGridItem img={img} />);
    expect(screen.getByText(img.title)).toBeTruthy();
  });
});
