console.log('Hello World!!!');

const nombre = 'Luis';
const apellido = 'Rangel';
// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hello World!
${nombre}
${apellido}
${1 + 1}`;
console.log(nombreCompleto);


function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(`${nombre} ${apellido}`)}`);
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);