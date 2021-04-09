import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../Components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn(); //Es lo mismo que () => {};
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Zelda';
    input.simulate('change', {
      target: { value },
    });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('NO debe de postear la información con submit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault() {}, //Es lo mismo que preventDefault: () => {}
    });
    expect(setCategories).not.toHaveBeenCalled();
  });
});
