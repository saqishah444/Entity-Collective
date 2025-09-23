import React from 'react'
import Navbar from './Components/Navbar.jsx'
import joinus from './assets/images/join-us-heroimg.png'
import pathimg from './assets/images/path.png'
import herocomp from './assets/images/hero-component.png'
import maskleft from './assets/images/mask-group-left.png'
import internship from './assets/images/internship.png'
import component from './assets/images/component.png'
import maskright from './assets/images/mask-group-right.png'
import research from './assets/images/research.png'
import sponsorship from './assets/images/sponsership.png'
import partnership from './assets/images/partnership.png'
import Footer from './Components/Footer.jsx'



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

      {/* Intern Section Start */}
      <section id="intern" className="  bg-white px-6 py-16" >
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>

            <div className='grid md:grid-cols-2  justify-center relative'>

              <div>

                <div className='relative inline-block'>
                  <div className='absolute z-0 left-[-150px] bottom-0 '>
                    <img src={maskleft} className='h-36 w-auto  ' alt="" />
                  </div>
                  <div className='mx-auto'>
                    <span className="bg-cyan-600 ms-0 lg:ms-32  z-10 relative text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                      Intern
                    </span>
                  </div>


                </div>
                <p className='tracking-widest text-cyan-900 [word-spacing:20px] text-[20px] mt-8'>DESIGNED FOR STUDENTS AND RECENT GRADUATES, THE INTERN MEMBERSHIP IS IDEAL FOR THOSE LOOKING TO ENGAGE IN CREATIVE, RESEARCH-BASED, OR TECHNICAL PROJECTS THAT ALIGN WITH ENTITY COLLECTIVE’S MISSION.</p>


              </div>
              <div className='flex justify-center'>
                <img src={internship} alt="" className='   md:h-72   lg:h-96 lg:mt-10 w-auto' />
                <div className='relative'>
                  <div className='hidden md:block absolute md:-bottom-40 md:-right-10 lg:-bottom-48 lg:-right-32 xl:-bottom-56 xl:-right-24  w-40 h-40  md:h-44 '>
                    <img src={component} alt="" />

                  </div>

                </div>

              </div>
            </div>
            <div className='grid  md:grid-cols-2 mt-0 lg:-mt-[180px] '>
              <div>
                <h3 className='text-2xl text-cyan-900 font-semibold py-10'>Benifits Include:</h3>
                <div className="p-5 bg-white">
                  <ul className="space-y-4 tracking-widest">
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



                  <p className="mt-6 text-2xl font-semibold text-cyan-700">
                    Annual Membership Fee: €50
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>

      {/* Intern Section End */}

      {/* Research Section Start */}

      <section id="research" className="  bg-white px-6 py-16" >
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>

            <div className='grid md:grid-cols-2  justify-center relative'>

              <div className='flex justify-center order-2 md:order-1'>
                <img src={research} alt="" className='   md:h-72   lg:mt-32 w-auto' />


              </div>
              <div className='order-1 md:order-2'>

                <div className='relative w-full'>
                  <div className='absolute z-0 right-0 bottom-0   lg:-right-40 xl:-right-5'>
                    <img src={maskright} className='h-24 md:h-28 lg:h-32 w-auto' alt="" />
                  </div>
                  <div className='mx-auto relative z-10'>
                    <span className="bg-[#923A7F] ms-0 lg:ms-40 text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                      Research
                    </span>
                  </div>


                </div>
                <p className='tracking-widest text-cyan-900 [word-spacing:20px] flex justify-center py-5 text-[20px] mt-8'>The Researcher Membership is intended for individuals deeply involved in the arts or social sciences who are committed to conducting advanced research in collaboration with Entity projects.</p>


              </div>

            </div>
            <div className='grid  md:grid-cols-2 mt-0 lg:-mt-[180px] '>
              <div></div>
              <div>
                <h3 className='text-2xl text-cyan-900 font-semibold py-10'>Benifits Include:</h3>
                <div className="p-5 bg-white">
                  <ul className="space-y-4 tracking-widest">
                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Recognition as a Researcher Member on the Entity Collective website
                      </p>
                    </li>


                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Access to our network of communities and partner organisations
                      </p>
                    </li>





                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        20% discount on all services provided by Entity Collective
                      </p>
                    </li>
                  </ul>



                  <p className="mt-6 text-2xl font-semibold text-[#923A7F]">
                    Annual Membership Fee: €150
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>

      {/* Research Section End */}

      {/* Partner Section Start */}
      <section id="partner" className="  bg-white px-6 py-16" >
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>

            <div className='grid md:grid-cols-2 items-center justify-center relative'>

              <div className=''>

                <div className='relative inline-block'>
                  <div className='absolute z-0 left-[-150px] bottom-0 '>
                    <img src={maskleft} className='h-36 w-auto  ' alt="" />
                  </div>
                  <div className='mx-auto'>
                    <span className="bg-[#009579] ms-0 lg:ms-32  z-10 relative text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                      Partner
                    </span>
                  </div>


                </div>
                <div className='flex justify-center mx-auto'>
                  <p className='tracking-widest  text-cyan-900 [word-spacing:20px] py-10 text-[20px] mt-8'>DESIGNED FOR STUDENTS AND RECENT GRADUATES, THE INTERN MEMBERSHIP IS IDEAL FOR THOSE LOOKING TO ENGAGE IN CREATIVE, RESEARCH-BASED, OR TECHNICAL PROJECTS THAT ALIGN WITH ENTITY COLLECTIVE’S MISSION.</p>

                </div>

              </div>
              <div className='flex justify-center'>
                <img src={partnership} alt="" className='   md:h-72    lg:mt-36 w-auto' />


              </div>
            </div>
            <div className='grid  md:grid-cols-2 mt-0 lg:-mt-[100px] '>
              <div>
                <h3 className='text-2xl text-cyan-900 font-semibold py-10'>Benifits Include:</h3>
                <div className="p-5 bg-white">
                  <ul className="space-y-4 items-center tracking-widest">
                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl  leading-relaxed text-gray-600">
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



                  <p className="mt-6 text-2xl font-semibold text-[#009579]">
                    Annual Membership Fee: €50
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>

      {/* Partner Section End */}


      {/* Sponsor Section Start */}

       <section id="sponsor" className="  bg-white px-6 py-16" >
        <div className='container mx-auto'>
          <div className='flex flex-col justify-center items-center'>

            <div className='grid md:grid-cols-2  justify-center relative'>

              <div className='flex justify-center order-2 md:order-1'>
                <img src={sponsorship} alt="" className='   md:h-72   lg:mt-32 w-auto' />
                <div className='relative'>
                  {/* Decorative component: hidden on small screens, fixed to viewport left on md+ so it touches the left edge */}
                  <div className='hidden absolute md:block  md:right-56 md:-bottom-72 lg:right-72 lg:-bottom-72 xl:right-96 xl:-bottom-72 w-40 h-40 md:h-44 '>
                    <img src={component} alt="" />

                  </div>

                </div>


              </div>
              <div className='order-1 md:order-2'>

                <div className='relative w-full'>
                  <div className='absolute z-0 right-0 bottom-0   lg:-right-40 xl:-right-5'>
                    <img src={maskright} className='h-24 md:h-28 lg:h-32 w-auto' alt="" />

                  </div>
                  <div className='mx-auto relative z-10'>
                    <span className="bg-[#EB8830] ms-0 lg:ms-40 text-white text-center tracking-widest font-medium px-24 py-4 text-3xl rounded-2xl">
                      Sponsor
                    </span>
                  </div>


                </div>
                <p className='tracking-widest text-cyan-900 [word-spacing:20px] flex justify-center py-5 text-[20px] mt-8'>Sponsor Membership is intended for individuals, companies, or organisations that actively support Entity Collective financially, intellectually, or creatively.</p>


              </div>

            </div>
            <div className='grid  md:grid-cols-2 mt-0 lg:-mt-[180px] '>
              <div></div>
              <div>
                <h3 className='text-2xl text-cyan-900 font-semibold py-10'>Benifits Include:</h3>
                <div className="p-5 bg-white">
                  <ul className="space-y-4 tracking-widest">
                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Prominent recognition as a Sponsor on all Entity materials and publications
                      </p>
                    </li>


                    <li className="flex">
                      <span className="flex-shrink-0 mt-3.5 w-1 h-1 rounded-full bg-cyan-900 mr-3" />
                      <p className="text-xl leading-relaxed text-gray-600">
                        Logo display on the Entity website and at all official events and exhibitions
                      </p>
                    </li>





                    
                  </ul>



                  <p className="mt-6 text-2xl font-semibold text-[#EB8830]">
                    Annual Membership Fee: €1500
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </section>

      <section id='footer'>
        <Footer />
      </section>


















    </div>

  )
}

export default App