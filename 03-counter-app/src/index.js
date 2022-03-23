import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello World!');

const saludo = <h1>Hello World!!!</h1>;

const divRoot = document.querySelector('#root');
ReactDOM.render(saludo, divRoot);

console.log(divRoot);
console.log(saludo);
