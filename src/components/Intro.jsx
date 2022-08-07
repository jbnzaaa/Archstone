import React from 'react'

function Intro() {
  return (
    <>
    {/* Intro */}
      <div className="container mx-auto px-20 py-10 h-[50vh] flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-10">
          <section>
            <h3 className='font-cinzel text-[30px]'>Welcome to Archstone</h3>
          </section>
          <section className="text-black text-sm font-montserrat">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu et nibh ac sem nisi. 
              Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit 
              tristique augue sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor.
            </p>
          </section>
          <section className="text-black text-sm font-montserrat">
            <p>
              Sit sit tellus, tellus, a varius arcu. Viverra sit rhoncus pellentesque vulputate 
              vitae tempus sit lectus ut. Lacinia at magna nullam arcu, sed morbi. At congue nunc 
              morbi a nisl venenatis, ornare nulla. Duis in faucibus sodales nibh eget. Eget 
              pellentesque tortor semper sapien purus. Sit sit tellus, 
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Intro