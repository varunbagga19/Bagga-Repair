import Link from 'next/link';
import React from 'react';

const colors = {
  primary: "#060606",
  background: "#F5F5F5",
  disabled: "#D9D9D9",
};

function LoginR() {
  return (
    <div className='flex flex-col md:flex-row bg-[#F5F5F5] min-h-screen'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-primary py-10 px-6 md:px-12'>
        <img src='/undraw_login_re_4vu2.svg' className='h-64 md:h-auto object-contain' alt='Login Background' />
        <h1 className='text-2xl md:text-4xl text-black font-bold text-center mt-6'>
          Log In To The World Of Services
        </h1>
        <p className='text-lg md:text-xl text-black font-semibold text-center mt-2'>
          Start for an experience like never before
        </p>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12'>
        <h1 className='text-xl md:text-3xl text-[#060606] font-semibold mb-4'>Bagga Repair !</h1>

        <div className='w-full max-w-md'>
          <div className='mb-6'>
            <h3 className='text-xl md:text-2xl font-semibold mb-2 text-black'>Login</h3>
            <p className='text-base md:text-lg mb-2 text-black'>Welcome Back! Please enter your details.</p>
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

          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2' />
              <p className='text-sm text-black'>Remember Me for 30 days</p>
            </div>
            <p className='text-sm text-black font-medium cursor-pointer underline'>
              Forgot password?
            </p>
          </div>

          <button className='w-full bg-black text-white rounded-md py-3 md:py-4 mb-4 md:mb-6 hover:bg-gray-900 flex items-center justify-center'>
            Log in
          </button>

          <button className='w-full bg-white text-black border border-black rounded-md py-3 md:py-4 mb-4 md:mb-6 hover:bg-gray-200 flex items-center justify-center '>
            Register
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
        </div>
        
        <p className='text-sm text-black mt-6'>
          Dont have an account?
          <Link href={"/signup"}>
          <span className='font-semibold underline cursor-pointer'>Sign up for free</span>
          </Link>
          
        </p>
      </div>
    </div>
  );
}

export default LoginR;
