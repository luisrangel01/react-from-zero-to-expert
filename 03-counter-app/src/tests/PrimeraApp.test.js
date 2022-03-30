import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';

import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('debe de mostrar <PrimeraApp />', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});
