import React from 'react'

function Heroes() {
  return (
    <div>
        <section id="home" class="py-5">
          <div class="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
            <div class="mb-14 lg:mb-0 lg:w-1/2">
              <h1 class="max-w-xl text-[2.9rem] leading-none text-gray-300 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
                Bagga Repair
              </h1>
              <p class="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
                Bagga Repair
              </p>
              <div class ="flex justify-center mt-14 lg:justify-start">
                <button type="button" class="text-white bg-indigo-600 font-medium rounded-lg px-5 py-4 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">Book now</button>

              </div>
            </div>
            <div class="lg:w-1/2">
              <img class="ml-auto" src="/undraw_barista_at0v.svg" height={'10px'} width={'300px'}></img>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Heroes