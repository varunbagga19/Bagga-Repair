"use client";
import React from 'react';


import Services from '@/components/HomePage/Services';
import Testimonials from '@/components/HomePage/Testimonials';
import Contact from '@/components/HomePage/Contact';
import Heroes from '@/components/HomePage/Heroes';

const LandingPage = () => {
  
  


  return (
    <div>
      <Heroes/>
      <Services/>
      <Testimonials/>

      <section className='bg-white py-10 text-center'>
        <h2 className='text-2xl text-black font-bold mb-10'>Why Choose Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-gray-100 p-4 rounded-md shadow-md'>
            <h3 className='text-xl text-black font-semibold mb-2'>Expert Technicians</h3>
            <p className='text-gray-600'>
              Our team of experienced technicians ensures top-notch repair services.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-md shadow-md'>
            <h3 className='text-xl text-black font-semibold mb-2'>Fast Turnaround</h3>
            <p className='text-gray-600'>
              We understand the urgency, and we offer quick repair turnaround times.
            </p>
          </div>
          {/* ... Add more cards for other features ... */}
        </div>
      </section>
      {/* Contact Section */}
      <Contact/>
    </div>
  );
};

export default LandingPage;
