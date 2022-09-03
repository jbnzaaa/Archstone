import React from 'react'
import Fade from 'react-reveal/Fade';

function Body() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col justify-end h-[90vh] sm:h-full mt-16 lg:h-full mt-14">
        <Fade bottom>
          <h1 className='font-cinzel text-black sm:px-5 text-[26px] md:px-7 text-[30px] 3xl:px-20 text-[50px]'>Discover your dream house</h1>
        </Fade>
        <Fade bottom>
          <img className='bg-img-1 w-[100vw] h-[500px] bg-cover bg-center' alt=''/>
        </Fade>
      </div>
    </>
  )
}

export default Body