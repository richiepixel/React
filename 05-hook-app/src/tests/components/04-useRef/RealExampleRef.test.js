import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef/>', () => {
  const wrapper = shallow(<RealExampleRef />);

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
  });

  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();

    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
  });
});
