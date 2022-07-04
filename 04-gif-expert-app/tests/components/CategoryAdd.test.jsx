import { fireEvent, render, screen } from '@testing-library/react';

import { CategoryAdd } from '../../src/components/CategoryAdd';

describe('Pruebas en <AddCategory />', () => {
  test('debe de cambiar el valor de la caja de text', () => {
    render(<CategoryAdd setCategories={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Vegeta' } });

    expect(input.value).toBe('Vegeta');
  });

  test('debe de llamar setCategories si el input tiene un valor', () => {
    const inputValue = 'Vegeta';

    render(<CategoryAdd setCategories={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    expect(input.value).toBe('');
  });
});
