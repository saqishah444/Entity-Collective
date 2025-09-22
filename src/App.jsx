import React from 'react'
import Navbar from './Components/Navbar.jsx'
import joinus from './assets/images/join-us-heroimg.png'
import pathimg from './assets/images/path.png'
import herocomp from './assets/images/hero-component.png'

const App = () => {
  return (
    <div className="scroll-smooth font-sans container mx-auto">
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
          <img src={herocomp} alt="" className='absolute bottom-20 md:bottom-36 lg-40 left-0' srcset="" />
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
        <div>
          <div>
            <h2 className='bg-cyan-600 block py-3 px-10 text-2xl font-semibold text-white rounded-2xl'>Intern</h2>
          </div>

        </div>
        
        
      </section>

     

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Entity Collective. All rights reserved.
      </footer>
    </div>

  )
}

export default App