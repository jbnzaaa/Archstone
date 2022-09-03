import React from 'react'
import Fade from 'react-reveal/Fade'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Footer() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto px-20 py-10 bg-black sm:px-5 md:px-7">
          <section className="grid grid-cols-5 gap-4 sm:grid-cols-1 gap-1">
            <ul className='bg-black col-span-2 sm:col-span-1'>
              <Fade bottom>
                <h3 className="text-xl text-white bg-black font-cinzel font-bold mb-2 sm:text-md md:text-md">Archstone</h3>
              </Fade>
              <Fade bottom delay={40}>
                <li className='text-white text-sm mb-1 text-xs md:text-sm'>info@archstone.com</li>
              </Fade>
              <Fade bottom delay={80}>
                <li className='text-white text-sm mb-1 text-xs md:text-sm'>(+63) 9123 456 7890</li>
              </Fade>
            </ul>
            <ul className='bg-black col-span-1'>
              <Fade bottom>
                <h3 className="text-sm text-white bg-black font-bold mb-2 sm:text-xs md:text-sm">Quick Links</h3>
              </Fade>
              <Fade bottom delay={40}>
                <Link to="/#" className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Home</Link>
              </Fade>
              <Fade bottom delay={80}>
                <Link to="/#about" className='text-white text-sm mb-1 sm:text-xs md:text-sm'>About</Link>
              </Fade>
              <Fade bottom delay={80}>
                <Link to="/#offers" className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Offers</Link>
              </Fade>
              <Fade bottom delay={120}>
                <Link to="/#contact" className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Contact</Link>
              </Fade>
              <Fade bottom delay={160}>
                <Link to="/FAQ" className='text-white text-sm mb-1 sm:text-xs md:text-sm'>FAQ</Link>
              </Fade>
            </ul>
            <ul className='bg-black col-span-1'>
              <Fade bottom>
                <h3 className="text-sm text-white bg-black font-bold mb-2 sm:text-xs md:text-sm">Social</h3>
              </Fade>
              <Fade bottom delay={40}>
                <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Facebook</li>
              </Fade>
              <Fade bottom delay={80}>
                <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Instagram</li>
              </Fade>
              <Fade bottom delay={120}>
                <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Twitter</li>
              </Fade>
            </ul>
            <ul className='bg-black col-span-1'>
              <Fade bottom>
                  <h3 className="text-sm text-white bg-black font-bold mb-2 sm:text-xs md:text-sm">Others</h3>
                </Fade>
                <Fade bottom delay={40}>
                  <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Privacy Policy</li>
                </Fade>
                <Fade bottom delay={80}>
                  <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Terms & Conditions</li>
                </Fade>
                <Fade bottom delay={120}>
                  <li className='text-white text-sm mb-1 sm:text-xs md:text-sm'>Cookies</li>
                </Fade>
              </ul>
          </section>
          <section className='mt-4'>
            <Fade bottom delay={120}>
              <p className='text-white text-sm text-xs md:text-sm'>2022, Archstone House</p>
            </Fade>
          </section>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Footer




