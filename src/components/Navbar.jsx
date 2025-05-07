import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">uv</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user" className="hover:text-yellow-300 transition">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

