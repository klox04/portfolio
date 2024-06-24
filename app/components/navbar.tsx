'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 relative sticky top-0 z-50">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex place-items-center gap-2 text-white text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400 hover:text-[#63e] hover:font-bold">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          <a href="#home" className='text-gray-400 hover:text-[#63e] hover:font-bold'>Portfolio</a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            ☰
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} absolute top-16 -0 w-full lg:static lg:bg-transparent lg:w-auto transition-all duration-300 ease-in-out`}>
          <a href="#home" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">Home</a>
          <a href="#about" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">About</a>
          <a href="#project" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">Projects</a>
          <a href="#certificates" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">Certificates</a>
          <a href="#journal" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">Journal</a>
          <a href="#contact" className="block py-2 px-4 text-gray-400 hover:text-[#63e] hover:font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
