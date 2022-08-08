import React from 'react'
import {BsPlusLg} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

function FAQ() {
  return (
    <>
      <div id="FAQ">
        <div className="container mx-auto px-20 py-10">
          <section className='flex items-center'>
            <Fade bottom>
              <h4 className='font-cinzel text-[30px]'>Frequently Asked Questions</h4>
              <span className='bg-black w-[70px] h-[1px] ml-4'> </span>
            </Fade>
          </section>
          {/* Guidelines */}
          <section className='my-10 text-sm font-montserrat'>
            <ul className="grid grid-rows-6 gap-3">
              <li className='flex justify-between py-3'>
                <Fade bottom>
                  <p className='text-[18px]'>What is the first step of the home buying process?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
              <li className='flex justify-between py-3'>
                <Fade bottom delay={40}>
                  <p className='text-[18px]'>How long does it take to buy a home?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
              <li className='flex justify-between py-3'>
                <Fade bottom delay={80}>
                  <p className='text-[18px]'>How much do I have to pay an agent to help me buy a house?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
              <li className='flex justify-between py-3'>
                <Fade bottom delay={120}>
                  <p className='text-[18px]'>What kind of credit score do I need to buy a home?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
              <li className='flex justify-between py-3'>
                <Fade bottom delay={160}>
                  <p className='text-[18px]'>How much do I need for a down payment?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
              <li className='flex justify-between py-3'>
                <Fade bottom delay={210}>
                  <p className='text-[18px]'>How long can the seller take to respond to my offer?</p>
                  <button className='bg-transparent'>
                    <BsPlusLg className='text-[18px]'/>
                  </button>
                </Fade>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default FAQ