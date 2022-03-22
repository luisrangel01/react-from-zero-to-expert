// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes from './data/heroes';
// import heroes, { owners } from './data/heroes';
// import { heroes, owners } from './data/heroes';
import heroes, { owners } from '../data/heroes';

console.log(owners);
console.log('Hello World!!!');

console.log(heroes);

const getHeroById = (id) => {
  return heroes.find((heroe) => {
    return heroe.id === id;
  });
};

const getHeroById2 = (id) => heroes.find((heroe) => heroe.id === id);
const getHeroByIdOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroById(2));
console.log(getHeroById(221));
console.log(getHeroById(3));
console.log(getHeroById2(3));
console.log(getHeroByIdOwner('DC'));
