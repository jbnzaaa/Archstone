import React from 'react'
import Fade from 'react-reveal/Fade'

function Offers() {
  return (
    <>
      <div id="offers">
        <div className="container mx-auto px-20 py-10 sm:px-5 md:px-7">
          <section className='flex items-center'>
            <Fade bottom>
              <h4 className='font-cinzel text-[30px] sm:text-[20px] md:text-[24px]'>Offers</h4>
              <span className='bg-black w-[70px] h-[1px] ml-4 sm:w-[50px] md:w-[60px]'></span>
            </Fade>
          </section>
          {/* Cards */}
          <section className='my-10 text-sm font-montserrat'>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 gap-5">
              <div className="col-span-1">
                <Fade bottom>
                  <img className='bg-img-2 w-screen h-[500px] bg-cover bg-center sm:h-[300px] md:h-[400px]' alt=''/>
                </Fade>
              </div>
              <div className="col-span-1 h-full flex flex-col justify-evenly">
                <div>
                  <Fade bottom>
                    <h4 className='font-cinzel text-[20px] mb-8 sm:text-sm mb-5 md:text-[16px]'>Greenmeadows Property House</h4>
                  </Fade>
                  <Fade bottom delay={20}>
                    <p className='sm:text-xs mb-5 md:text-sm'>
                      Duis in faucibus sodales nibh eget. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                      Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit tristique augue 
                      sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor.
                    </p>
                  </Fade>
                </div>
                <ul className='flex sm:mb-5'>
                  <Fade bottom delay={60}>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>2</span> Storey House</li>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>180 - 211</span> Sqm.</li>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>2 - 3</span> Car Garage</li>
                  </Fade>
                </ul>
                <Fade bottom delay={80}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black] sm:text-xs md:text-sm'>view more</button>
                </Fade>
              </div>
            </div>
          </section>
          <section className='my-10 text-sm font-montserrat'>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 gap-5">
              <div className="col-span-1 h-full flex flex-col justify-evenly">
                <div>
                  <Fade bottom>
                    <h4 className='font-cinzel text-[20px] mb-8 sm:text-sm mb-5 md:text-[16px]'>Mckinley West Village 3-Storey House</h4>
                  </Fade>
                  <Fade bottom delay={20}>
                    <p className='sm:text-xs mb-5 md:text-sm'>
                      Sit sit tellus, tellus, a varius arcu. Viverra sit rhoncus pellentesque vulputate vitae 
                      tempus sit lectus ut. Lacinia at magna nullam arcu, sed morbi. At congue nunc morbi a nisl 
                      venenatis, ornare nulla. Duis in faucibus sodales nibh eget. Eget pellentesque tortor 
                      semper sapien purus. Sit sit tellus, 
                    </p>
                  </Fade>
                </div>
                <ul className='flex sm:mb-5'>
                  <Fade bottom delay={40}>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>3</span> Storey House</li>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>283 - 480</span> Sqm.</li>
                    <li className='mr-10 sm:mr-6 text-xs md:text-sm'><span className='text-[18px] sm:text-xs md:text-sm'>4 - 6</span> Car Garage</li>
                  </Fade>
                </ul>
                <Fade bottom delay={60}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black] sm:text-xs md:tet-sm'>view more</button>
                </Fade>
              </div>
              <div className="col-span-1 sm:order-first">
                <Fade bottom>
                  <img className='bg-img-3 w-screen h-[500px] bg-cover bg-center sm:h-[300px] md:h-[400px]' alt=''/>
                </Fade>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Offers