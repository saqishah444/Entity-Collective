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

                <div className='relative inline-block'>
                  <div className='absolute z-0 left-[-150px] bottom-0 '>
                    <img src={maskleft} className='h-44 w-auto  ' alt=""  />
                  </div>
                  <div className='mx-auto'>
                    <span className="bg-cyan-600  z-10 relative text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                      Intern
                    </span>
                  </div>


                </div>
                <p className='tracking-widest text-cyan-900 [word-spacing:20px] text-[20px] mt-8'>DESIGNED FOR STUDENTS AND RECENT GRADUATES, THE INTERN MEMBERSHIP IS IDEAL FOR THOSE LOOKING TO ENGAGE IN CREATIVE, RESEARCH-BASED, OR TECHNICAL PROJECTS THAT ALIGN WITH ENTITY COLLECTIVE’S MISSION.</p>

               
              </div>
              <div className='flex justify-center'>
                <img src={internship} alt="" className='   md:h-72   lg:h-96 lg:mt-10 w-auto' />

              </div>
            </div>
            <div className='grid  md:grid-cols-2 mt-0 lg:-mt-[180px] '>
              <div>
                 <h3 className='text-2xl text-cyan-900 font-semibold py-10'>Benifits Include:</h3>
                <div className="p-5 bg-white">
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Hands-on experience and skill development in your area of practice (art, science, economics, programming, etc.)
                      </p>
                    </li>


                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Opportunities for meaningful collaboration with like-minded professionals
                      </p>
                    </li>


                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Access to our professional network and job opportunities
                      </p>
                    </li>


                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        20% discount on all services provided by Entity Collective
                      </p>
                    </li>
                  </ul>


                  <p className="mt-6 text-2xl font-semibold text-cyan-900">
                    Annual Membership Fee: €50
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>




    </div>

  )
}

export default App