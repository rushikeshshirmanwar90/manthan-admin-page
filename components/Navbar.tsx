"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsSearch, BsX, BsBell } from 'react-icons/bs';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <i className='bx bx-menu cursor-pointer'></i>
      <a href="#" className="nav-link">Categories</a>
      <form className={`flex items-center ${searchOpen ? 'show' : ''}`} onSubmit={(e) => e.preventDefault()}>
        <div className="relative flex items-center">
          <input type="search" placeholder="Search..." className="pl-4 py-2 rounded-l-lg bg-gray-200" />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-lg" onClick={() => setSearchOpen(!searchOpen)}>
            {searchOpen ? <BsX size={24} /> : <BsSearch size={24} />}
          </button>
        </div>
      </form>
      <label className="switch-mode relative inline-block w-10 h-6" htmlFor="switch-mode">
        <input type="checkbox" id="switch-mode" hidden onChange={toggleDarkMode} checked={isDarkMode} />
        <span className="absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-gray-300 rounded-full before:absolute before:content-[''] before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:transition-transform before:transform-gpu before:top-1 before:left-1 before:right-1"></span>
      </label>
      <a href="#" className="notification relative">
        <BsBell size={24} />
        <span className="num absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">8</span>
      </a>
      <a href="#" className="profile">
        <Image src="/img/people.png" width={36} height={36} className="rounded-full" alt="Profile" />
      </a>
    </nav>
  );
}

export default Navbar;
