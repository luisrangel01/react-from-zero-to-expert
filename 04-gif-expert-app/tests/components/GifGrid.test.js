import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Vegeta';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      { id: '1234', img: { url: 'abc', title: 'hola' } },
      { id: '4321', img: { url: 'cba', title: 'aloh' } },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
