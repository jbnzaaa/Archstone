import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Fade from 'react-reveal/Fade'
import {RiMenu4Line} from 'react-icons/ri'

function Nav() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto py-3 sm:px-5 lg:px-7 3xl:px-20">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <Fade bottom>
              <Link to='/#' className="text-black font-cinzel font-bold sm:text-[18px] font-semibold lg:text-[18px] font-semibold 3xl:text-xl">Archstone</Link>
            </Fade>
            {/* Nav Links */}
            <ul className='flex items-center sm:hidden lg:hidden 3xl:flex'>
              <Fade bottom delay={40}>
                <Link to='/' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Home</Link>
                <Link to='/#about' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>About</Link>
                <Link to='/#offers' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Offers</Link>
                <Link to='/#contact' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Contact</Link>
                <Link to='/#FAQ' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>FAQ</Link>
              </Fade>
              <Link to='/' className='text-sm text-black mx-4 font-montserrat'>
                <Fade bottom delay={80}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black]'>Inquire</button>
                </Fade>
              </Link>
            </ul>
            {/* Nav Menu Burger */}
            <div className='sm:block lg:block 3xl:hidden'>
              <RiMenu4Line/>
            </div>
            {/* <ul className='flex items-center sm:hidden'>
              <Fade bottom delay={40}>
                <Link to='/' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Home</Link>
                <Link to='/#about' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>About</Link>
                <Link to='/#offers' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Offers</Link>
                <Link to='/#contact' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>Contact</Link>
                <Link to='/#FAQ' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black'>FAQ</Link>
              </Fade>
              <Link to='/' className='text-sm text-black mx-4 font-montserrat'>
                <Fade bottom delay={80}>
                  <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black]'>Inquire</button>
                </Fade>
              </Link>
            </ul> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Nav