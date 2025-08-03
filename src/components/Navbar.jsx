import React from 'react';

function Navbar() {
  return (
    <div className='bg-[rgb(245,195,85)] text-black md:p-8 p-4'>
      <div className='container mx-auto md:flex flex-col md:flex-row justify-end items-center md:gap-10 '>
        {/* Navigation Links */}
        <a href="/Homepage" className='mb:block mb:text-center md:text-lg font-bold md: md:font-normal hover:underline pr-7'>Homepage</a>
        <a href="/Aboutus" className='mb:block mb:text-center md:text-lg font-bold md: md:font-normal hover:underline pr-7'>About Us</a>
        <a href="/Projects" className='mb:block mb:text-center md:text-lg font-bold  md:font-normal hover:underline pr-7'>Projects</a>
        <a href="/Contact" className='mb:block mb:text-center md:text-lg font-bold md:font-normal hover:underline '>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

