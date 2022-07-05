import { renderHook } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on useFetchGifs() hook', () => {
  test('deb de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Vegeta'));
    const { data, loading } = result.current;

    expect(data).toBe([]);
    expect(loading).toBe(false);
    // useFetchGifs();
  });
});
