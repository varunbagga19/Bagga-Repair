"use client";
import React, { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
    const [toggle, setToggle] = useState(true);
    const [iconName,setIcon] = useState(faBars)
    function handleToggle(e){
        e.preventDefault();
        setToggle(!toggle); // Toggle the value
        setIcon(toggle ? faBars : faTimes); // Toggle the icon
    }

  return (
    <header className='bg-white font-serif'>
       <nav className='flex justify-between items-center w-[92%] mx-auto py-2'>
            <div>
                <h1 className='text-black font-bold text-xl'>Bagga Repair</h1>
            </div>
            <div className={`text-black md:static absolute bg-white md:min-h-fit min-h-[60vh] md:w-auto left-0 ${toggle ? 'top-[9%]':'top-[-100%]' } w-full my-5 flex items-center px-5`}>
            <ul className='flex md:flex-row flex-col items-center md:gap-[4vw] gap-8'>
                <li>
                    <a className='hover:text-gray-500'>Products</a>
                </li>
                <li>
                    <a className='hover:text-gray-500'>Solution</a>
                </li>
                <li>
                    <a className='hover:text-gray-500'>Resources</a>
                </li>
                <li>
                    <a className='hover:text-gray-500'>Developers</a>
                </li>
                <li>
                    <a className='hover:text-gray-500'>Pricing</a>
                </li>
            </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button class='bg-[#a6c1ee] tex-white px-5 py-2 min-w- rounded-full hover:bg-[#87acec]'>Sign in</button>
                <FontAwesomeIcon onClick={handleToggle} icon={iconName} className='text-3xl cursor-pointer md:hidden' style={{color: "#000205",}} />
            </div>
       </nav>

    </header>
  )
}

export default NavBar;
