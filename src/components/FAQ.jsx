import React from 'react'
import {BsPlusLg} from 'react-icons/bs'

function FAQ() {
  return (
    <>
      <div className="container mx-auto px-20 py-10">
        <section className='flex items-center'>
          <h4 className='font-cinzel text-[30px]'>Frequently Asked Questions</h4>
          <span className='bg-black w-[70px] h-[1px] ml-4'> </span>
        </section>
        {/* Guidelines */}
        <section className='my-10 text-sm font-montserrat'>
          <ul className="grid grid-rows-6 gap-3">
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>What is the first step of the home buying process?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>How long does it take to buy a home?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>How much do I have to pay an agent to help me buy a house?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>What kind of credit score do I need to buy a home?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>How much do I need for a down payment?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
            <li className='flex justify-between py-3'>
              <p className='text-[18px]'>How long can the seller take to respond to my offer?</p>
              <BsPlusLg className='text-[18px]'/>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default FAQ