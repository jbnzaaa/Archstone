import React from 'react'
import Fade from 'react-reveal/Fade';

function Body() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col justify-end h-[90vh] sm:h-full mt-16">
        <Fade bottom>
          <h1 className='font-cinzel text-[60px] text-black px-20 sm:px-5 text-[26px] lg:px-7'>Discover your dream house</h1>
        </Fade>
        <Fade bottom>
          <img className='bg-img-1 w-[100vw] h-[500px] bg-cover bg-center' />
        </Fade>
      </div>
    </>
  )
}

export default Body