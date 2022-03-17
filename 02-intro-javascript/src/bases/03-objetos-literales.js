console.log('Hello World!!!');

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: { ciudad: 'New York', zip: 8937943, lat: 14.34323, lng: 34.3434 },
};

console.log({ persona });

const persona2 = { ...persona };
const persona3 = persona;

persona2.nombre = 'Peter';

console.log({ persona2 });
console.log({ persona3 });
console.log({ persona });
