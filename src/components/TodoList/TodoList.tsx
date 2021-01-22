import React from 'react';
import { Todo } from '../../types/type';

type TodoListProps = {
  todos: Todo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map((i) => (
        <li className="todo" key={i.id}>
          <label>
            <input
              type="checkbox"
              className={i.completed ? 'completed' : ''}
              checked={i.completed}
              onChange={() => onToggle(i.id)}
            />
            <span>{i.title}</span>
            <i className="material-icons red-text" onClick={() => onRemove(i.id)}>
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
