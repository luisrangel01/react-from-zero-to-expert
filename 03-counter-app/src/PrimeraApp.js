import React, { Fragment } from 'react';

const PrimeraApp = () => {
  const saludo = 'Hello World!!!';
  // const saludo = [1,2,3,4,5];
  // const saludo = {
  //   nombre: 'Luis',
  //   edad: 41,
  // };

  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>Mi primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
