import React from 'react'
import {BsDash} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

function Offers() {
  return (
    <>
      <div id="offers">
        <div className="container mx-auto px-20 py-10">
          <section className='flex items-center'>
            <Fade bottom>
              <h4 className='font-cinzel text-[30px]'>Offers</h4>
              <span className='bg-black w-[70px] h-[1px] ml-4'></span>
            </Fade>
          </section>
          {/* Cards */}
          <section className='my-10 text-sm font-montserrat'>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1">
                <Fade bottom>
                  <img className='bg-img-2 w-screen h-[500px] bg-cover bg-center' />
                </Fade>
              </div>
              <div className="col-span-1 h-full flex flex-col justify-evenly">
                <div>
                  <Fade bottom>
                    <h4 className='font-cinzel text-[20px] mb-8'>Greenmeadows Property House</h4>
                  </Fade>
                  <Fade bottom delay={20}>
                    <p>
                      Duis in faucibus sodales nibh eget. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                      Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit tristique augue 
                      sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor.
                    </p>
                  </Fade>
                </div>
                <ul className='flex'>
                  <Fade bottom delay={60}>
                    <li className='mr-10'><span className='text-[18px]'>2</span> Storey House</li>
                    <li className='mr-10'><span className='text-[18px]'>180 - 211</span> Sqm.</li>
                    <li className='mr-10'><span className='text-[18px]'>2 - 3</span> Car Garage</li>
                  </Fade>
                </ul>
                <Fade bottom delay={80}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black]'>view more</button>
                </Fade>
              </div>
            </div>
          </section>
          <section className='my-10 text-sm font-montserrat'>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1 h-full flex flex-col justify-evenly">
                <div>
                  <Fade bottom>
                    <h4 className='font-cinzel text-[20px] mb-8'>Mckinley West Village 3-Storey House</h4>
                  </Fade>
                  <Fade bottom delay={20}>
                    <p>
                      Sit sit tellus, tellus, a varius arcu. Viverra sit rhoncus pellentesque vulputate vitae 
                      tempus sit lectus ut. Lacinia at magna nullam arcu, sed morbi. At congue nunc morbi a nisl 
                      venenatis, ornare nulla. Duis in faucibus sodales nibh eget. Eget pellentesque tortor 
                      semper sapien purus. Sit sit tellus, 
                    </p>
                  </Fade>
                </div>
                <ul className='flex'>
                  <Fade bottom delay={40}>
                    <li className='mr-10'><span className='text-[18px]'>3</span> Storey House</li>
                    <li className='mr-10'><span className='text-[18px]'>283 - 480</span> Sqm.</li>
                    <li className='mr-10'><span className='text-[18px]'>4 - 6</span> Car Garage</li>
                  </Fade>
                </ul>
                <Fade bottom delay={60}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black]'>view more</button>
                </Fade>
              </div>
              <div className="col-span-1">
                <Fade bottom>
                  <img className='bg-img-3 w-screen h-[500px] bg-cover bg-center' />
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