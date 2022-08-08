import React from 'react'
import Fade from 'react-reveal/Fade';

function Body() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col justify-end h-[90vh]">
        <Fade bottom>
          <h1 className='font-cinzel text-[60px] text-black px-20'>Discover your dream house</h1>
        </Fade>
        <Fade bottom>
          <img className='bg-img-1 w-[100vw] h-[500px] bg-cover bg-center' />
        </Fade>
      </div>
    </>
  )
}

export default Body