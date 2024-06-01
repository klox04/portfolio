'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 relative">
      <div className="container mx-auto px-8 flex justify-between items-center fixed">
        <div className="flex place-items-center gap-2 text-white text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5"
        stroke="currentColor"
         className="size-6 text-gray-400">
      <path 
      
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
     <h3 className='text-gray-400 hover:text-white hover:font-bold'>Porfolio</h3>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-white">☰</button>
        </div>
        <div className={`flex flex-col lg:flex-row lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="#home" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Home</a>
          <a href="#about" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">About</a>
          <a href="#project" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Projects</a>
          <a href="#certificates" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Certificates</a>
          <a href="#journal" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Journal</a>
          <a href="#contact" className="py-2 lg:py-0 text-gray-400 hover:text-white hover:font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
