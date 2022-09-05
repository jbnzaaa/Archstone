import React, { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineMinus} from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

function FAQ() {
  const [showFAQ1, setShowFAQ1] = useState(false)
  const [showFAQ2, setShowFAQ2] = useState(false)
  const [showFAQ3, setShowFAQ3] = useState(false)
  const [showFAQ4, setShowFAQ4] = useState(false)
  const [showFAQ5, setShowFAQ5] = useState(false)
  const [showFAQ6, setShowFAQ6] = useState(false)

  return (
    <>
      <div id="FAQ">
        <div className="container mx-auto px-20 py-10 sm:px-5 md:px-7">
          <section className='flex items-center'>
            <Fade bottom>
              <h4 className='font-cinzel text-[30px] sm:text-[20px] md:text-[24px]'>Frequently Asked Questions</h4>
              <span className='bg-black w-[70px] h-[1px] ml-4 sm:w-[50px] md:w-[60px]'></span>
            </Fade>
          </section>
          {/* Guidelines */}
          <section className='my-10 text-sm font-montserrat'>
            <ul className="grid grid-rows-1 gap-3 sm:grid-cols-1 gap-1">
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>What is the first step of the home buying process?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ1 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ1(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ1(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ1 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates tempora nostrum debitis! Tempore.
                  </p>
                ) : null}
              </li>
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>How long does it take to buy a home?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ2 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ2(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ2(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ2 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur accusamus maiores perspiciatis modi blanditiis atque sint. Tenetur, aut vitae!
                  </p>
                ) : null}
              </li>
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>How much do I have to pay an agent to help me buy a house?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ3 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ3(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ3(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ3 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates tempora nostrum debitis! Tempore, 
                    quo deserunt quidem at.
                  </p>
                ) : null}
              </li>
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>What kind of credit score do I need to buy a home?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ4 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ4(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ4(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ4 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Animi voluptates tempora nostrum debitis! Tempore, quo deserunt quidem at, nemo reprehenderit accusamus maiores perspiciatis modi blanditiis atque sint.
                  </p>
                ) : null}
              </li>
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>How much do I need for a down payment?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ5 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ5(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ5(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ5 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Nemo reprehenderit accusamus maiores perspiciatis modi blanditiis atque sint. Tenetur, aut vitae!
                  </p>
                ) : null}
              </li>
              <li>
                <div className="flex justify-between py-3">
                  <Fade bottom>
                    <p className='text-[18px] sm:text-[14px] w-auto'>How long can the seller take to respond to my offer?</p>
                    <button className='bg-transparent pl-3'>
                      {showFAQ6 ? <AiOutlineMinus className='text-[18px] text-[14px]' onClick={() => setShowFAQ6(false)}/> : <BsPlusLg className='text-[18px] text-[14px]' onClick={() => setShowFAQ6(true)}/>}
                    </button>
                  </Fade>
                </div>
                {showFAQ6 ? (
                  <p className='flex items-center text-black sm:text-xs w-auto md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates tempora nostrum debitis! Tempore, 
                    quo deserunt quidem at, nemo reprehenderit accusamus maiores.
                  </p>
                ) : null}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default FAQ