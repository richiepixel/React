import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import './css/styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToogle = (todoId) => {
    dispatch({
      type: 'toogle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
          {/* <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 col-12"
            >
              Agregar
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
