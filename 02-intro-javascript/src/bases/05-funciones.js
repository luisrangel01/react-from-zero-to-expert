console.log('Hello World!!!');

// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// saludar = 30;

// console.log(saludar('Luis'));
console.log(saludar2('Luis'));

console.log(saludar);
console.log(saludar2);
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => {
  return {
    uid: 'ABC1234',
    username: 'larc@gmail.com',
  };
};

const getUser2 = () => ({
  uid: 'ABC1234',
  username: 'larc@gmail.com',
});

console.log(getUser());
console.log(getUser2());

const getUsuarioActivo = (nombre) => ({ uid: new Date().getTime(), username: nombre });

console.log(getUsuarioActivo('larc'));
