import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='drop-shadow py-4 pl-12 md:pr-8 sm:pr-4 flex justify-between items-center w-[100vw] fixed z-100 uppercase bg-white z-50'>
      <div className='pl-1'>
        <h1 className='text-2xl'>DHINA ASHWIN</h1>
      </div>
      <div className='md:hidden md:pr-4 sm:pr-1'>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className='hidden md:flex md:gap-12 lg:gap-16'>
        <ul className='flex gap-6'>
          <a href="#home" className><li>Home</li></a>
           <a href="#about" className><li>About</li></a>
           <a href="#work" className><li>Work</li></a>
           <a href="#skills" className><li>Skills</li></a>
           <a href="#contact" className><li>Contact</li></a>
        </ul>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5 }}
            className='fixed top-16 right-0 w-[200px] h-[100vh] bg-white flex flex-col items-center justify-start md:hidden z-0'
          >
            <ul className='flex flex-col gap-20 text-xl mt-20'>
              <a href="#home" onClick={toggleMenu} ><li>Home</li></a>
           <a href="#about" onClick={toggleMenu}><li>About</li></a>
           <a href="#work" onClick={toggleMenu}><li>Work</li></a>
           <a href="#skills" onClick={toggleMenu}><li>Skills</li></a>
           <a href="#contact" onClick={toggleMenu}><li>Contact</li></a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
