import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-reducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamar la función handleAddTodo', () => {
    const value = 'Aprender React';
    const onChange = wrapper.find('input').prop('onChange');
    onChange({
      target: {
        value,
        name: 'description',
      },
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe(''); //Es para comprobar que se llame el reset despues de agregaer un Todo
  });
});
