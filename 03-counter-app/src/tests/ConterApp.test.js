import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe de mostrar <CounterApp />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const textoCounter = wrapper.find('h2').text().trim();
    console.log({ textoCounter });

    expect(textoCounter).toBe(value.toString());
  });

  test('debe de incrementar con el boton +1', () => {
    // const bt1 = wrapper.find('button').at(0);
    // console.log(`bt1:`);
    // console.log(bt1.html);

    wrapper.find('button').at(0).simulate('click');
    const value = 11;

    const textoCounter = wrapper.find('h2').text().trim();
    console.log({ textoCounter });

    expect(textoCounter).toBe(value.toString());
  });

  test('debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const value = 9;

    const textoCounter = wrapper.find('h2').text().trim();
    console.log({ textoCounter });

    expect(textoCounter).toBe(value.toString());
  });
});
