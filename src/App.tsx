import React, { useState } from 'react';

import { Navbar, TodoForm, TodoList } from './components';
import { Todo } from './types/type';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: Todo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      }),
    );
    console.log(todos);
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList onToggle={toggleHandler} onRemove={removeHandler} todos={todos} />
      </div>
    </>
  );
};

export default App;
