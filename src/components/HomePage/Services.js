import React from 'react';

function Services() {
  const services = [
    {
      image: 'https://image.similarpng.com/very-thumbnail/2020/05/Washing-machine-3d-render-transparent-PNG.png',
      title: 'Washing Machine Repair',
      description: 'Fast and reliable washing machine repair services.',
    },
    {
      image: 'https://image.similarpng.com/very-thumbnail/2020/05/Samsung-refrigerator-four-doors-PNG.png',
      title: 'Fridge Repair',
      description: 'Expert fridge repair for all major brands.',
    },
    {
      image:'https://image.similarpng.com/very-thumbnail/2020/10/Microwave-oven-isolated-on-transparent-background-PNG.png',
      title: 'Microwave Repair',
      description: 'Expert Microwave repair for all major brands.',
    },
    {
      image: 'https://image.similarpng.com/very-thumbnail/2020/05/Air-conditioner-PNG.png',
      title: 'Air Conditioner Repair',
      description: 'Expert Air Conditioner repair for all major brands.',
    },
    // Add more services...
  ];

  return (
    <div>
      <section className='py-10 text-center'>
        <div className='text-2xl font-bold mb-8'>Our Services</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-white p-4 rounded-md shadow-md'>
            <div className='bg-white'>
            <img src={service.image} alt={service.title} className='mb-4 w-full bg-black'  />
            </div>
             
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <button className='text-blue-500 hover:underline'>Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
