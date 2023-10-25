import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Card from './User/Card';
import Notification from './Notification';

function Navbar() {
  return (
    <nav className="bg-black sticky top-0 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-white">
          AstronFT
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link to="/card" className="hover:text-gray-300">Card</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/signup" className="hover:text-gray-300">SignUp</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link to="/notification" className="hover:text-gray-300">Notification</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

