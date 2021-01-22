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

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
