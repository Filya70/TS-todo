import React from 'react';
import { Todo } from '../../types/type';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((i) => (
        <li className="todo" key={i.id}>
          <label>
            <input
              type="checkbox"
              className={i.completed ? 'completed' : ''}
              checked={i.completed}
            />
            <span>{i.title}</span>
            <i className="material-icons red-text">delete</i>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
