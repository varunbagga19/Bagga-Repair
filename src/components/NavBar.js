"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [iconName, setIcon] = useState(faBars);

  function handleToggle() {
    setToggle(!toggle);
    setIcon(toggle ? faBars : faTimes);
  }

  return (
    <header className='bg-white font-serif'>
      <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
        <div>
          <Link href={"/"}>
            <h1 className='text-black font-bold text-xl'>Bagga Repair</h1>
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <Link href={"/login"}>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 min-w-[100px] rounded-full hover:bg-[#87acec]'>
              Log in
            </button>
          </Link>
          <Link href={"/singup"}>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 min-w-[100px] rounded-full hover:bg-[#87acec]'>
              Sign up
            </button>
          </Link>
          <FontAwesomeIcon
            onClick={handleToggle}
            icon={iconName}
            className='text-3xl cursor-pointer md:hidden'
            style={{ color: '#000205' }}
          />
        </div>
      </nav>
      {/* Nav Items */}
      {toggle && (
        <div className='md:hidden'>
          <ul className='bg-white w-full py-4 px-2 text-center'>
            <li>
              <a className='block py-2 hover:text-gray-500 text-black'>Products</a>
            </li>
            <li>
              <a className='block py-2 hover:text-gray-500  text-black'>Solution</a>
            </li>
            <li>
              <a className='block py-2 hover:text-gray-500  text-black'>Resources</a>
            </li>
            <li>
              <a className='block py-2 hover:text-gray-500  text-black'>Developers</a>
            </li>
            <li>
              <a className='block py-2 hover:text-gray-500  text-black'>Pricing</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
