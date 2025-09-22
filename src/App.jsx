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

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-900">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Build modern, responsive, and scalable web applications tailored to your
              needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Beautiful and intuitive designs that engage your users and improve experience.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Consulting</h3>
            <p className="text-gray-600">
              Professional advice and guidance to ensure your project succeeds.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-100 px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-900">
          Our Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 1</h3>
              <p className="text-gray-600">Brief description of project 1.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 2</h3>
              <p className="text-gray-600">Brief description of project 2.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Project 3</h3>
              <p className="text-gray-600">Brief description of project 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-white px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-900">
          Contact Us
        </h2>
        <form className="w-full max-w-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Entity Collective. All rights reserved.
      </footer>
    </div>

  )
}

export default App