import React from 'react';

function Navbar() {
  return (
    <div className='bg-[rgb(245,195,85)] text-black md:p-8'> {/* Adjust padding for all screens */}
      <div className='container mx-auto flex flex-col md:flex-row justify-end items-center gap-4 md:gap-10'>
        {/* Navigation Links */}
        <a href="/Homepage" className='block text-center text-lg font-bold md: md:font-normal hover:underline'>Homepage</a>
        <a href="/Aboutus" className='block text-center text-lg font-bold md: md:font-normal hover:underline'>About Us</a>
        <a href="/Projects" className='block text-center text-lg font-bold  md:font-normal hover:underline'>Projects</a>
        <a href="/Contact" className='block text-center text-lg font-bold md:font-normal hover:underline'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;