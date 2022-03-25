describe('Pruebas en el archivo demo.test.js', () => {
  test('debe de ser iguales los strings', () => {
    // 1. inicializacion
    const mensaje = 'Hello World!';

    // 2. estimulo
    const mensaje2 = `Hello World!`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
