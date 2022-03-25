import { retornaArreglo } from '../../base/07-deses-arr';

describe(`Pruebas en 07-deses-arr.js`, () => {
  test(`retornaArreglo debe de retornar un arreglo [string,number]`, () => {
    const clave = 'ABC';
    const edad = 123;
    const arrayTest = [clave, edad];
    const array = retornaArreglo();
    console.log(array);

    expect(array).toEqual(arrayTest);
  });
});
