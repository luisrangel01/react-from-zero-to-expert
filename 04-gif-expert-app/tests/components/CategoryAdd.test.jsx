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
    const setCategories = jest.fn()

    render(<CategoryAdd setCategories={setCategories} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    // expect(setCategories).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar setCategories si el input esta vacio', () => {
    const setCategories = jest.fn()

    render(<CategoryAdd setCategories={setCategories} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(setCategories).not.toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(0);
  });
});
