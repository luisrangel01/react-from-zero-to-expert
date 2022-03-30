import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  test('debe de mostrar <CounterApp />', () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const textoTitulo = wrapper.find('h2').text().trim();
    console.log({ textoTitulo });

    expect(textoTitulo).toBe(value.toString());
  });
});
