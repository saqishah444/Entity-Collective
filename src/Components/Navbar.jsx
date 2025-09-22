import React, { useState } from "react";
import logo from '../assets/images/navlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white  py-4 ">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={logo} // apna logo yahan dalna
            alt="Entity Collective"
            className="h-20 w-auto"
          />
          
        </a>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* simple inline icons to avoid extra dependency */}
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex items-center justify-center`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-10 border-b-4 border-gray-200 tracking-widest mt-4 md:mt-0">
            <li>
              <a href="#home" className="block text-xl py-2 px-3 text-sky-600 hover:opacity-80">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="block text-xl py-2 px-3 text-orange-600 hover:opacity-80">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#services" className="block text-xl py-2 px-3 text-purple-600 hover:opacity-80">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#projects" className="block text-xl py-2 px-3 text-teal-600 hover:opacity-80">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-xl py-2 px-3 text-yellow-500 hover:opacity-80">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
