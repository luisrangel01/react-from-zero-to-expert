console.log('Hello World!!!');

// Desestructuracion
// Asignacion Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango2: 'soldado',
};

const { nombre, clave } = persona;
const { nombre: nombre2 } = persona;

console.log(nombre);
console.log(nombre2);
console.log(persona.edad);
console.log(clave);

const retornaPersona = (usuario) => {
  console.log(usuario);
};

const retornaPersona2 = ({ nombre, rango = 'Capitan' }) => {
  console.log(nombre, rango);
};

const userContext = ({ nombre, rango = 'Capitan', edad, clave }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.23232,
      lng: -12.02343,
    },
  };
};

retornaPersona(persona);
retornaPersona2(persona);

const avenger = userContext(persona);
const { nombreClave, anios, latlng } = userContext(persona);
const {
  latlng: { lat, lng },
} = userContext(persona);
console.log(avenger);
console.log({ nombreClave, anios });
console.log(nombreClave, anios);
console.log(latlng);
console.log(lat, lng);
