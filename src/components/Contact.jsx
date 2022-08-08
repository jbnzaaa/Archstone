import React from 'react'
import Fade from 'react-reveal/Fade'

function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container mx-auto px-20 py-10 h-[70vh]">
          <section className='flex items-center'>
            <Fade bottom>
              <h4 className='font-cinzel text-[30px]'>Make an appointment</h4>
              <span className='bg-black w-[70px] h-[1px] ml-4'> </span>
            </Fade>
          </section>
          {/* Guidelines */}
          <section className='my-10 text-sm font-montserrat'>
            <div className="grid grid-cols-2 gap-20">
              <div className="col-span-1 h-full">
                <Fade bottom>
                  <p className='w-[500px]'>
                    Duis in faucibus sodales nibh eget. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                    Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit tristique augue 
                    sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor. Tellus justo velit tristique augue 
                    sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                  </p>
                </Fade>
              </div>
              <div className="col-span-1 text-sm font-montserrat">
                <form action="">
                  {/* Full Name */}
                  <label className="block mb-3">
                    {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Full Name</span> */}
                    <Fade bottom>
                      <input type="text" placeholder='Full Name' name="" id="" className="mt-0 block w-full px-3 5 border-0 border-b-2 bg-transparent bg-main text-black focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                    </Fade>
                  </label>
                  {/* Phone Number */}
                  <label className="block mb-3">
                    {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Phone Number</span> */}
                    <Fade bottom delay={40}>
                      <input type="text" placeholder='Phone Number' name="" id="" className="mt-0 block w-full px-3 5 border-0 border-b-2 bg-transparent bg-main text-black focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                    </Fade>
                  </label>
                  {/* Email */}
                  <label className="block mb-3">
                    {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Email</span> */}
                    <Fade bottom delay={80}>
                      <input type="text" placeholder='Email' name="" id="" className="mt-0 block w-full px-3 5 border-0 border-b-2 bg-transparent bg-main text-black focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                    </Fade>
                  </label>
                  {/* Selecet Date & Time */}
                  <label className="block mb-3">
                    {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Select Date & Time</span> */}
                    <Fade bottom delay={120}>
                      <input type="date" placeholder='Select Date & Time' name="" id="" className="mt-0 block w-full px-3 5 border-0 border-b-2 bg-transparent bg-main text-black focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                    </Fade>
                  </label>
                  <Fade bottom delay={160}>
                    <button className='bg-black w-[100%] h-[45px] text-white text-sm font-montserrat mt-5 hover:bg-[black]'>make appointment</button>
                  </Fade>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact