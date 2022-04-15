import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const img = {
    title,
    url,
  };

  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifGridItem img={img} />);
    expect(wrapper).toMatchSnapshot();
  });
});
