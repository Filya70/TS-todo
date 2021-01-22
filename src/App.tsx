import React, { useState } from 'react';

import { Navbar, TodoForm } from './components';

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log(`New todo: ${title}`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
      </div>
    </>
  );
};

export default App;
