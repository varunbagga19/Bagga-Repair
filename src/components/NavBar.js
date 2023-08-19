import React from 'react'

function NavBar() {
  return (
    <header className='bg-white font-serif'>
       <nav className='flex justify-between items-center w-[92%] mx-auto py-3'>
            <div>
                <h1 className='text-black font-bold text-xl'>Bagga Repair</h1>
            </div>
            <div className='text-black'>
            <ul className='flex items-center gap-[4vw]'>
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
            <div>
                <button class='bg-[#a6c1ee] tex-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign in</button>
            </div>
       </nav>

    </header>
  )
}

export default NavBar