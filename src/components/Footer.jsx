import React from 'react'

function Footer() {
  return (
    <>
      <div className="container mx-auto px-20 py-20 bg-black">
        <div className="flex justify-between bg-black">
          <section className='flex flex-col justify-between h-[200px] bg-black'>
            <ul className='bg-black'>
              <h3 className="text-xl text-white bg-black font-cinzel font-bold mb-4">Archstone</h3>
              <li className='bg-black text-white text-sm mb-4'>info@archstone.com</li>
              <li className='bg-black text-white text-sm' mb-4>9123 456 7890</li>
            </ul>
            <p className='bg-black text-white text-sm'>2022, Archstone House</p>
          </section>
          <section className='flex flex-row justify-between font-montserrat h-[200px] w-[35vw] bg-black'>
            <ul className='bg-black'>
              <h3 className="text-sm text-white bg-black font-bold mb-4">Quick Links</h3>
              <li className='bg-black text-white text-sm mb-4'>Home</li>
              <li className='bg-black text-white text-sm mb-4'>Offers</li>
              <li className='bg-black text-white text-sm mb-4'>Contact</li>
              <li className='bg-black text-white text-sm mb-4'>FAQ</li>
            </ul>
            <ul className='bg-black'>
              <h3 className="text-sm text-white bg-black font-bold mb-4">Social</h3>
              <li className='bg-black text-white text-sm mb-4'>Facebook</li>
              <li className='bg-black text-white text-sm mb-4'>Instagram</li>
              <li className='bg-black text-white text-sm mb-4'>Twitter</li>
            </ul>
            <ul className='bg-black'>
              <h3 className="text-sm text-white bg-black font-bold mb-4">Others</h3>
              <li className='bg-black text-white text-sm mb-4'>Privacy Policy</li>
              <li className='bg-black text-white text-sm mb-4'>Terms & Conditions</li>
              <li className='bg-black text-white text-sm mb-4'>Cookies</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default Footer