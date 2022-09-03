import React,{ useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Fade from 'react-reveal/Fade'
import {RiMenu4Line} from 'react-icons/ri'
import {IoCloseOutline} from 'react-icons/io5'

function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto py-3 sm:px-5 md:px-7 3xl:px-20">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <Fade bottom>
              <Link to='/#' className="text-black font-cinzel font-bold sm:text-[18px] font-semibold md:text-[18px] font-semibold 3xl:text-xl">Archstone</Link>
            </Fade>
            {/* Nav Links */}
            <ul className='flex items-center sm:hidden md:hidden 3xl:flex'>
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
            <button className='sm:block md:block 3xl:hidden'>
              <RiMenu4Line className='sm:text-lg' onClick={() => setShowMenu(true)}/>
            </button>
            {showMenu ? (
              <div className='sm:flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
                <div className="relative flex justify-end w-[100vw] h-[100%]">
                  <div className="bg-[#E5E4E0] flex flex-col w-[10vw] h-full text-black sm:w-[100vw] md:w-[40vw]">
                    <div className='px-5 py-4 flex justify-between items-center'>
                      <Link to='/#' className="text-black font-cinzel font-bold text-[18px] font-semibold text-center">Archstone</Link>
                      <button className='' onClick={() => setShowMenu(false)}>
                        <IoCloseOutline className='text-2xl font-bold'/>
                      </button>
                    </div>
                    <ul className='flex flex-col justify-between items-center h-[300px] mt-10'>
                      <Fade bottom delay={40}>
                        <Link to='/' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black' onClick={() => setShowMenu(false)}>Home</Link>
                        <Link to='/#about' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black' onClick={() => setShowMenu(false)}>About</Link>
                        <Link to='/#offers' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black' onClick={() => setShowMenu(false)}>Offers</Link>
                        <Link to='/#contact' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black' onClick={() => setShowMenu(false)}>Contact</Link>
                        <Link to='/#FAQ' className='text-sm text-black mx-4 font-montserrat hover:border-b-2 border-black' onClick={() => setShowMenu(false)}>FAQ</Link>
                      </Fade>
                      <Link to='/' className='text-sm text-black mx-4 font-montserrat'>
                        <Fade bottom delay={80}>
                          <button className='bg-black w-[149px] h-[38px] text-white hover:bg-[black]'>Inquire</button>
                        </Fade>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Nav