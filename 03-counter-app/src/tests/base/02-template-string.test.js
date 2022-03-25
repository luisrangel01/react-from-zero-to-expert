import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe de retornar Hola Luis', () => {
    const nombre = 'Luis';
    const saludo = getSaludo(nombre);
    console.log(saludo);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test('getSaludo debe de retornar Hola Bryan si no hay argumento en el campo nombre', () => {
    const saludo = getSaludo();
    console.log(saludo);

    expect(saludo).toBe(`Hola Bryan`);
  });
});
