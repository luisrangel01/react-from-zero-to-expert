console.log('Hello World!!!');

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// const [p1, p2, p3] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

// console.log(p1);
console.log(p2);
console.log(p3);
// console.log(p2);
// console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log(`hola mundo!!! ${valor}`);
    },
    45
  ];
};


// eslint-disable-next-line react-hooks/rules-of-hooks
const arr = useState('Goku');
console.log(arr);

arr[1]();