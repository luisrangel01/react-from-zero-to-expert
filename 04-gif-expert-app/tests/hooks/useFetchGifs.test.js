import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on useFetchGifs() hook', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Vegeta'));
    const { data, loading } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Vegeta'));
    await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0));
    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
