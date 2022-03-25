import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en 09-promesas.js', () => {
  test('getHeroeByIdAsync debe de retornar un Heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      console.log(heroe);
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('getHeroeByIdAsync debe obtener un error si el heroe no existe', (done) => {
    const id = 1001;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        console.log(heroe);
        expect(heroe).toBe(undefined);
        done();
      })
      .catch((err) => {
        console.log(err);
        expect(err).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
});
