import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {
  test(`getHeroeById debe de retornar un objeto`, () => {
    const id = 1;
    const heroeTest = heroes.find((h) => h.id === id);

    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toEqual(heroeTest);
  });

  test(`getHeroeById debe de retornar undefined si heroe no existe`, () => {
    const id = 1001;

    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toBe(undefined);
  });

  test(`getHeroesByOwner debe de retornar un arreglo con los heroes de DC`, () => {
    const owner = 'DC';
    const heroesTest = heroes.filter((h) => h.owner === owner);

    const heroeResult = getHeroesByOwner(owner);
    console.log(heroeResult);

    expect(heroeResult).toEqual(heroesTest);
  });

  test(`getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel con un length = 2`, () => {
    const owner = 'Marvel';
    const heroesTest = heroes.filter((h) => h.owner === owner);

    const heroeResult = getHeroesByOwner(owner);
    console.log(heroeResult);

    expect(heroeResult.length).toBe(heroesTest.length);
  });
});
