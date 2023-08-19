import React from 'react'

function Services() {
    const services = [
        {
          title: "Washing Machine Repair",
          description: "Fast and reliable washing machine repair services.",
        },
        {
          title: "Fridge Repair",
          description: "Expert fridge repair for all major brands.",
        },
        {
          title: "Fridge Repair",
          description: "Expert fridge repair for all major brands.",
        },
        {
          title: "Fridge Repair",
          description: "Expert fridge repair for all major brands.",
        },
        {
          title: "Fridge Repair",
          description: "Expert fridge repair for all major brands.",
        },
        {
          title: "Fridge Repair",
          description: "Expert fridge repair for all major brands.",
        },
        // Add more services...
      ];
  return (
    <div>
    <section className='py-16 text-center'>
    {/* ... Services section content ... */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {services.map((service, index) => (
        <div key={index} className='bg-white p-4 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
          <p className='text-gray-600 mb-4'>{service.description}</p>
          <button className='text-blue-500 hover:underline'>Learn More</button>
        </div>
      ))}
    </div>
  </section></div>
  )
}

export default Services