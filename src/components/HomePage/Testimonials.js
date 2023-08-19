import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
    const testimonials = [
        {
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },{
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },
        {
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },
        {
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },
        {
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },
        {
          text: "Great service! Fixed my microwave in no time. Highly recommended.",
          author: "Sarah Johnson",
        },
        // Add more testimonials...
      ];
    
  return (
    <div >
    <section className='bg-gray-100 py-10 text-center flex flex-col items-center justify-center'>
    <h2 className='text-2xl text-black font-bold mb-12 '>Customer Reviews</h2>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={1000}
      centerMode={true}
      className=' flex mx-auto'
      containerClass='container'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
        },
      }}
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className='bg-white p-6 rounded-md shadow-md mb-6 md:mb-0 md:mr-6 max-w-xs'>
          <FontAwesomeIcon icon={faStar} className='text-yellow-500 text-2xl mb-2' />
          <p className='text-gray-600 mb-4'>{testimonial.text}</p>
          <p className='text-blue-500'>- {testimonial.author}</p>
        </div>
      ))}
    </Carousel>
  </section></div>
  )
}

export default Testimonials