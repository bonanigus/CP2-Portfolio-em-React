import React, { useState } from 'react';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-[auto] bg-gray-800 flex justify-between items-center px-4 py-2 z-50'>
        <a href='#' className='text-white text-xl font-bold list-none'>Authenticals</a>
      <ul>
        <nav className='hidden md:flex space-x-4'>
          
            <a href='#' className='text-white hover:text-gray-400'>Inicio</a>
            <a href='#work' className='text-white hover:text-gray-400'>Trabalhos</a>
            <a href='#projects' className='text-white hover:text-gray-400'>Projetos</a>
            <a href='#contact' className='text-white hover:text-gray-400'>Contato</a>
            <a href='#team' className='text-white hover:text-gray-400'>Equipe</a>
        </nav>
      </ul>
      <button className='md:hidden focus:outline-none text-white hover:text-gray-400'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM4 12a2 2 0 1 0 0 4v-4z" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
