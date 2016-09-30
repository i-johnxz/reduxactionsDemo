/* eslint linebreak-style: ["error", "windows"]*/
import React from 'react';

const TodoList = ({
  todos,
  onDeleteTodo,
}) => (
  <div>
    <ul>
      {
      todos.map((todo, index) => (
        <li key={index}>
          {todo.get('text')}
          <button onClick={onDeleteTodo(index)}>X</button>
        </li>
      )).toJS()
    }
    </ul>
  </div>
);

export default TodoList;
