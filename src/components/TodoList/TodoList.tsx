import React from 'react';

const TodoList: React.FC = () => {
  return (
    <ul>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span></span>
          <i className="material-icons red-text">delete</i>
        </label>
      </li>
    </ul>
  );
};

export default TodoList;
