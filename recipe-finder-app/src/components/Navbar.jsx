import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src="/logo.png" alt="Logo" />
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
