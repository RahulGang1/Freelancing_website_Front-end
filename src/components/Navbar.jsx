import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="flex justify-between items-center py-4 bg-white-500 text-black shadow-lg shadow-gray-500/50 p-6 bg-white rounded-lg relative">
      <div className="ml-4 flex items-center">
        <svg
          className="w-8 h-8 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-lg font-bold">Logo</span>
      </div>
      <div className="hidden md:flex items-center">
        {['Home', 'About', 'Contact'].map(item => (
          <Link key={item} to={`/${item.toLowerCase()}`} className="mr-4 hover:text-gray-200">{item}</Link>
        ))}
      </div>
      <div className="hidden md:flex items-center justify-end mr-8">
        <Link to="/login">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Signup</button>
        </Link>
      </div>
      <div className="md:hidden flex items-center justify-end mr-4">
        <button onClick={toggleMenu} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center absolute top-16 right-4 bg-blue-500 text-white p-4 z-50">
          {['Home', 'About', 'Contact'].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="mb-4 hover:text-black-200">{item}</Link>
          ))}
          <Link to="/login">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
