import React from 'react'

function Nav() {
  return (
    <>
      <div className="container mx-auto px-20 py-3">
        <div className="flex flex-row justify-between items-center">
          {/* Logo */}
          <h3 className="text-xl text-black font-cinzel font-bold">Archstone</h3>
          {/* Nav Links */}
          <ul className='flex items-center'>
            <li className='text-sm text-black mx-4 font-montserrat'>Home</li>
            <li className='text-sm text-black mx-4 font-montserrat'>Offers</li>
            <li className='text-sm text-black mx-4 font-montserrat'>Contact</li>
            <li className='text-sm text-black mx-4 font-montserrat'>FAQ</li>
            <li className='text-sm text-black mx-4 font-montserrat'>
              <button className='bg-black w-[149px] h-[38px] text-white'>Inquire</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav