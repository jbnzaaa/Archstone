import React from 'react'
import Fade from 'react-reveal/Fade'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto px-20 py-20 bg-black">
          <div className="flex justify-between bg-black">
            <section className='flex flex-col justify-between h-[200px] bg-black'>
              <ul className='bg-black'>
                <Fade bottom>
                  <h3 className="text-xl text-white bg-black font-cinzel font-bold mb-2">Archstone</h3>
                </Fade>
                <Fade bottom delay={40}>
                  <li className='text-white text-sm mb-1'>info@archstone.com</li>
                </Fade>
                <Fade bottom delay={80}>
                  <li className='text-white text-sm mb-1'>(+63) 9123 456 7890</li>
                </Fade>
              </ul>
              <Fade bottom delay={120}>
                <p className='bg-black text-white text-sm'>2022, Archstone House</p>
              </Fade>
            </section>
            <section className='flex flex-row justify-between font-montserrat h-[200px] w-[35vw] bg-black'>
              <ul className='bg-black'>
                <Fade bottom>
                  <h3 className="text-sm text-white bg-black font-bold mb-2">Quick Links</h3>
                </Fade>
                <Fade bottom delay={40}>
                  <Link to="/#" className='text-white text-sm mb-1'>Home</Link>
                </Fade>
                <Fade bottom delay={80}>
                  <Link to="/#about" className='text-white text-sm mb-1'>About</Link>
                </Fade>
                <Fade bottom delay={80}>
                  <Link to="/#offers" className='text-white text-sm mb-1'>Offers</Link>
                </Fade>
                <Fade bottom delay={120}>
                  <Link to="/#contact" className='text-white text-sm mb-1'>Contact</Link>
                </Fade>
                <Fade bottom delay={160}>
                  <Link to="/FAQ" className='text-white text-sm mb-1'>FAQ</Link>
                </Fade>
              </ul>
              <ul className='bg-black'>
                <Fade bottom>
                  <h3 className="text-sm text-white bg-black font-bold mb-2">Social</h3>
                </Fade>
                <Fade bottom delay={40}>
                  <li className='text-white text-sm mb-1'>Facebook</li>
                </Fade>
                <Fade bottom delay={80}>
                  <li className='text-white text-sm mb-1'>Instagram</li>
                </Fade>
                <Fade bottom delay={120}>
                  <li className='text-white text-sm mb-1'>Twitter</li>
                </Fade>
              </ul>
              <ul className='bg-black'>
              <Fade bottom>
                  <h3 className="text-sm text-white bg-black font-bold mb-2">Others</h3>
                </Fade>
                <Fade bottom delay={40}>
                  <li className='text-white text-sm mb-1'>Privacy Policy</li>
                </Fade>
                <Fade bottom delay={80}>
                  <li className='text-white text-sm mb-1'>Terms & Conditions</li>
                </Fade>
                <Fade bottom delay={120}>
                  <li className='text-white text-sm mb-1'>Cookies</li>
                </Fade>
              </ul>
            </section>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Footer