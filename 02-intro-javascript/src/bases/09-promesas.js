import { getHeroById2 } from './bases/08-import-export';

console.log('Hello World!!!');

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2 segundos despues...');
    // resolve();
    const heroe = getHeroById2(2);
    if (!heroe) {
      reject(`No se pudo encontrar el heroe`);
    }
    resolve(heroe);
  }, 2000);
});

promesa
  .then((result) => {
    console.log(`Then de la promesa`);
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 segundos despues...');
      const heroe = getHeroById2(id);
      if (heroe) {
        resolve(heroe);
      }
      reject(`No se pudo encontrar el heroe con el id: ${id}`);
    }, 2000);
  });

  return promesa;
};

const getHeroeByIdAsync2 = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 segundos despues...');
      const heroe = getHeroById2(id);
      if (heroe) {
        resolve(heroe);
      }
      reject(`No se pudo encontrar el heroe con el id: ${id}`);
    }, 2000);
  });
};

getHeroeByIdAsync(42)
  .then((result) => {
    console.log(`Then de la promesa`);
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

getHeroeByIdAsync2(4)
  .then((result) => {
    console.log(`Then de la promesa`);
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

getHeroeByIdAsync2(1).then(console.log).catch(console.error);
