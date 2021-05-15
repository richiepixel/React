import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../components/08-reducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList/>', () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  test('debe de mostrar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener dos <TodoListItem/>', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
    // expect().toBe();
  });
});
