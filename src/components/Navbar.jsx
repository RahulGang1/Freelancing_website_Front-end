import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="relative">
      <nav className="flex justify-between items-center py-4 bg-white text-black shadow-lg p-6 rounded-lg">
        <div className="ml-4 flex items-center">
          <img className='log'
            src="https://i.ibb.co/jHh1Tqm/Whats-App-Image-2024-10-10-at-22-21-37-86969a8a.jpg" 
            alt="Company Logo" 
          ></img>
        </div>
        <div className="hidden md:flex items-center">
          {['Home', 'Service', 'Contact'].map(item => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="mr-4 hover:text-gray-600">{item}</Link>
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
          <div className="md:hidden flex flex-col items-center absolute top-16 right-4 bg-blue-500 text-white p-4 transition-all duration-300">
            {['Home', 'Service', 'Contact'].map(item => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="mb-4 hover:text-gray-300">{item}</Link>
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
    </header>
  );
};

export default Navbar;
