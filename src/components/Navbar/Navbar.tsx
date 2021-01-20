import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-2 px1">
        <a href="/" className="brand-logo">
          TS TodoList
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Список</a>
          </li>
          <li>
            <a href="/">О нас</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
