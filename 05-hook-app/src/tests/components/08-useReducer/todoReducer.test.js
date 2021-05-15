import { todoReducer } from '../../../components/08-reducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('debe de agreagr un TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Vue',
      done: false,
    };
    const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });
    console.log(state);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('debe de borrar un todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Vue',
      done: false,
    };

    const state = todoReducer([...demoTodos, newTodo], {
      type: 'delete',
      payload: newTodo.id,
    });

    expect(state.length).toBe(2);
    expect(state).toEqual(demoTodos);
  });

  test('debe de hacer el TOOGLE del TODO', () => {
    const state = todoReducer(demoTodos, {
      type: 'toogle',
      payload: demoTodos[1].id,
    });
    expect(state[0]).toEqual(demoTodos[0]);
    expect(state[1].done).toBeTruthy();
  });
});
