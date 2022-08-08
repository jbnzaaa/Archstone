import React from 'react'
import Fade from 'react-reveal/Fade'

function Intro() {
  return (
    <>
    {/* Intro */}
      <div id="about" className="container mx-auto px-20 py-10 h-[50vh] flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-10">
          <section>
            <Fade bottom>
              <h3 className='font-cinzel text-[30px]'>Welcome to Archstone</h3>
            </Fade>
          </section>
          <section className="text-black text-sm font-montserrat">
            <Fade bottom delay={40}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu et nibh ac sem nisi. 
                Ac at tellus nisl porttitor sit euismod cum pellentesque diam. Tellus justo velit 
                tristique augue sed lorem cursus laoreet ullamcorper. Eget pellentesque tortor.
              </p>
            </Fade>
          </section>
          <section className="text-black text-sm font-montserrat">
            <Fade bottom delay={80}>
              <p>
                Sit sit tellus, tellus, a varius arcu. Viverra sit rhoncus pellentesque vulputate 
                vitae tempus sit lectus ut. Lacinia at magna nullam arcu, sed morbi. At congue nunc 
                morbi a nisl venenatis, ornare nulla. Duis in faucibus sodales nibh eget. Eget 
                pellentesque tortor semper sapien purus. Sit sit tellus, 
              </p>
            </Fade>
          </section>
        </div>
      </div>
    </>
  )
}

export default Intro