import React from 'react';

import { Navbar, TodoForm } from './components';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
