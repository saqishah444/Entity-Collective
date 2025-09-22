import React from 'react'
import Navbar from './Components/Navbar.jsx'
import joinus from './assets/images/join-us-heroimg.png'
import pathimg from './assets/images/path.png'
import herocomp from './assets/images/hero-component.png'
import maskleft from './assets/images/mask-group-left.png'
import internship from './assets/images/internship.png'

const App = () => {
  return (
    <div className="scroll-smooth font-sans ">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section
        id="membership"
        className="grid place-items-center text-center py-40   px-6 bg-white"
      >
        {/* === Top Main Image (JOIN US + Figures) === */}
        <div className="grid place-items-center w-full">
          <img
            src={joinus}
            alt="Join Us Banner"
            className="w-full max-w-4xl h-auto object-contain"
          />

        </div>

        {/* === Memberships Button === */}
        <div className="grid gap-2  mt-10">
          <div className='relative'>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-10 py-4 md:px-24 md:py-6 rounded-2xl border-2 border-black shadow-lg text-lg md:text-4xl tracking-widest transition">
              MEMBERSHIPS
            </button>
            <div>
              <img src={herocomp} alt="" className='absolute bottom-20 md:bottom-36 lg-40 left-0' srcSet="" />
            </div>
          </div>
          {/* === Bottom Vector Arrow === */}
          <div className="grid place-items-end pe-2 ">
            <img
              src={pathimg}
              alt="Down Arrow"
              className="w-auto h-8 md:w-auto md:h-16 lg:h-20 lg:w-auto  object-contain"
            />
          </div>
        </div>


      </section>

      {/* About Section */}
      <section id="about" className="  bg-white px-6 py-16" >
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            
            <div className='grid md:grid-cols-2  justify-center relative'>

              <div>
                <div className='relative'>
              <span className="bg-cyan-600 z-50 text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                Intern
              </span>
              <div className='absolute left-[-150px] bottom-0 '>
                <img src={maskleft} className='h-44 w-auto  ' alt="" srcset="" />
              </div>
            </div>
                <p className='tracking-widest [word-spacing:10px] mt-8'>DESIGNED FOR STUDENTS AND RECENT GRADUATES, THE INTERN MEMBERSHIP IS IDEAL FOR THOSE LOOKING TO ENGAGE IN CREATIVE, RESEARCH-BASED, OR TECHNICAL PROJECTS THAT ALIGN WITH ENTITY COLLECTIVE’S MISSION.</p>

              </div>
              <div>
                <img src={internship} alt=""  />

              </div>
            </div>

          </div>

        </div>


      </section>




    </div>

  )
}

export default App