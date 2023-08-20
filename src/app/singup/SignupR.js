import Link from 'next/link';
import React from 'react';

const colors = {
  primary: "#060606",
  background: "#F5F5F5",
  disabled: "#D9D9D9",
};

function SignUp() {
  return (
    <div className='flex flex-col md:flex-row bg-[#F5F5F5] min-h-screen'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-primary py-10 px-6 md:px-12'>
        <img src='/undraw_login_re_4vu2.svg' className='h-64 md:h-auto object-contain' alt='Sign Up Background' />
        <h1 className='text-2xl md:text-4xl text-black font-bold text-center mt-6'>
          Join Us and Discover Amazing Services
        </h1>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12'>
        <h1 className='text-xl md:text-3xl text-[#060606] font-semibold mb-4'>Bagga Repair</h1>

        <div className='w-full max-w-md '>
          <div className='mb-6 my-auto'>
            <h3 className='text-xl md:text-2xl font-semibold mb-2 text-black'>Sign Up</h3>
            <p className='text-base md:text-lg mb-2 text-black'>Join us by providing your information.</p>
          </div>

          <div className='w-full mb-4 flex flex-col items-center justify-center'>
            <input
              type='text'
              placeholder='Name'
              className='w-full text-black py-2 px-3 bg-transparent border-b border-black placeholder-gray-500 focus:outline-none'
            />
          </div>

          <div className='w-full mb-4'>
            <input
              type='email'
              placeholder='Email'
              className='w-full text-black py-2 px-3 bg-transparent border-b border-black placeholder-gray-500 focus:outline-none'
            />
          </div>

          <div className='w-full mb-4'>
            <input
              type='password'
              placeholder='Password'
              className='w-full text-black py-2 px-3 bg-transparent border-b border-black placeholder-gray-500 focus:outline-none'
            />
          </div>

          <div className='w-full mb-6'>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full text-black py-2 px-3 bg-transparent border-b border-black placeholder-gray-500 focus:outline-none'
            />
          </div>

          <button className='w-full bg-black text-white rounded-md py-3 md:py-4 mb-4 md:mb-6 hover:bg-gray-900'>
            Sign Up
          </button>

          <div className='w-full flex items-center mb-4'>
            <div className='flex-grow border-t border-black'></div>
            <p className='text-sm text-black mx-4'>or</p>
            <div className='flex-grow border-t border-black'></div>
          </div>

          <button className='w-full bg-white text-black border border-black rounded-md py-3 md:py-4 mb-4 md:mb-6 hover:bg-gray-200 flex items-center justify-center'>
          <img src='/Papirus-Team-Papirus-Apps-Google.svg' className='h-6 mr-3'/>
          Sign In With Google
          </button>

          <p className='text-sm text-black flex items-center justify-center '>
            Already have an account ? 
            <Link href={"/login"}>
            <span className='font-semibold underline cursor-pointer'> Log in</span>
            </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
