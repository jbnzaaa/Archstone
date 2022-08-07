import React from 'react'

function Contact() {
  return (
    <>
      <div className="container mx-auto px-20 py-10 h-[70vh]">
        <section className='flex items-center'>
          <h4 className='font-cinzel text-[30px]'>Make an appointment</h4>
          <span className='bg-black w-[70px] h-[1px] ml-4'> </span>
        </section>
        {/* Guidelines */}
        <section className='my-10 text-sm font-montserrat'>
          <div className="grid grid-cols-2 gap-20">
            <div className="col-span-1 h-full">
              <p className='w-[500px]'>
                Duis in faucibus sodales nibh eget. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit tristique augue 
                sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor. Tellus justo velit tristique augue 
                sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
              </p>
            </div>
            <div className="col-span-1 text-sm font-montserrat">
              <form action="">
                {/* Full Name */}
                <label className="block mb-3">
                  {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Full Name</span> */}
                  <input type="text" placeholder='Full Name' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 bg-main focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                </label>
                {/* Phone Number */}
                <label className="block mb-3">
                  {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Phone Number</span> */}
                  <input type="text" placeholder='Phone Number' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 bg-main focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                </label>
                {/* Email */}
                <label className="block mb-3">
                  {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Email</span> */}
                  <input type="text" placeholder='Email' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 bg-main focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                </label>
                {/* Selecet Date & Time */}
                <label className="block mb-3">
                  {/* <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Select Date & Time</span> */}
                  <input type="text" placeholder='Select Date & Time' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 bg-main focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
                </label>
                <button className='bg-black w-[249px] h-[38px] text-white text-sm font-montserrat mt-5'>make appointment</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact