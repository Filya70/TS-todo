import React, { useState } from 'react';

type TodoFormProps = {
  onAdd(title: string): void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [todo, setTodo] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(todo);
      setTodo('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={todo}
        type="text"
        id="title"
        placeholder="Текст задачи"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите задачу
      </label>
    </div>
  );
};

export default TodoForm;
