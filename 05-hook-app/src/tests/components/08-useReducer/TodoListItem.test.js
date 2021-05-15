import React from 'react';
import { shallow } from 'enzyme';
import '../../fixtures/demoTodos';
import TodoListItem from '../../../components/08-reducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem/>', () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={1}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar la función handleDelete', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de llamar la función handleToogle', () => {
    wrapper.find('p').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('debe de mostrar el texto correctamente', () => {
    const texto = wrapper.find('p').text();
    expect(texto.trim()).toBe(`${demoTodos[0].id + 1}. ${demoTodos[0].desc}`);
  });

  test('debe de de tener la clase complete sí el todo.done es true', () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);
    expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
  });
});
