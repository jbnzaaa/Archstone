import React from 'react'
import {BsDash} from 'react-icons/bs'

function Offers() {
  return (
    <>
      <div className="container mx-auto px-20 py-10">
        <section className='flex items-center'>
          <h4 className='font-cinzel text-[30px]'>Offers</h4>
          <span className='bg-black w-[70px] h-[1px] ml-4'> </span>
        </section>
        {/* Cards */}
        <section className='my-10 text-sm font-montserrat'>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <img className='bg-img-2 w-[617px] h-[500px] bg-cover bg-center' />
            </div>
            <div className="col-span-1 h-full flex flex-col justify-evenly">
              <div>
                <h4 className='font-cinzel text-[20px] mb-8'>Greenmeadows Property House</h4>
                <p>
                  Duis in faucibus sodales nibh eget. Eget pellentesque tortor semper sapien purus. Sit sit tellus, 
                  Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit tristique augue 
                  sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor.
                </p>
              </div>
              <ul className='flex'>
                <li className='mr-10'><span className='text-[18px]'>2</span> Storey House</li>
                <li className='mr-10'><span className='text-[18px]'>180 - 211</span> Sqm.</li>
                <li className='mr-10'><span className='text-[18px]'>2 - 3</span> Car Garage</li>
              </ul>
              <button className='bg-black w-[149px] h-[38px] text-white'>view more</button>
            </div>
          </div>
        </section>
        <section className='my-10 text-sm font-montserrat'>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1 h-full flex flex-col justify-evenly">
              <div>
                <h4 className='font-cinzel text-[20px] mb-8'>Mckinley West Village 3-Storey House</h4>
                <p>
                  Sit sit tellus, tellus, a varius arcu. Viverra sit rhoncus pellentesque vulputate vitae 
                  tempus sit lectus ut. Lacinia at magna nullam arcu, sed morbi. At congue nunc morbi a nisl 
                  venenatis, ornare nulla. Duis in faucibus sodales nibh eget. Eget pellentesque tortor 
                  semper sapien purus. Sit sit tellus, 
                </p>
              </div>
              <ul className='flex'>
                <li className='mr-10'><span className='text-[18px]'>3</span> Storey House</li>
                <li className='mr-10'><span className='text-[18px]'>283 - 480</span> Sqm.</li>
                <li className='mr-10'><span className='text-[18px]'>4 - 6</span> Car Garage</li>
              </ul>
              <button className='bg-black w-[149px] h-[38px] text-white'>view more</button>
            </div>
            <div className="col-span-1">
              <img className='bg-img-3 w-[617px] h-[500px] bg-cover bg-center' />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Offers