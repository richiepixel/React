import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Pruebas en <HookApp/>', () => {
  test('el componente debe de mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
