import { usContext } from '../../base/06-deses-obj';

describe(`Pruebas en 06-deses-obj.js`, () => {
  test(`usContext debe de retornar un objeto`, () => {
    const clave = '12345';
    const edad = 41;
    const usContextTest = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const context = usContext({ clave, edad });
    console.log(context);

    expect(context).toEqual(usContextTest);
  });
});
