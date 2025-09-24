import { Mail } from 'lucide'
import logo from '../assets/images/navlogo.png'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Social icons - top */}
        <div className="flex justify-center  space-x-4 mb-6">
          <a href="#" className="inline-flex items-center justify-center h-10 w-10  bg-[#2F6680] text-white">
            {/* Facebook (inline SVG) */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.19 22 17.06 22 12.07z" />
            </svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center h-10 w-10  bg-[#2F6680] text-white">
            {/* Instagram */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zm6.5-2a1.1 1.1 0 11-.001-2.202A1.1 1.1 0 0118.5 6.2z" />
            </svg>
          </a>
          <a href="#" className="inline-flex items-center justify-center h-10 w-10  bg-[#2F6680] text-white">
            {/* Github */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.9 3.18 9.06 7.59 10.53.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.86-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.67.08-.66.08-.66 1.1.08 1.68 1.12 1.68 1.12.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.93 0 0 .92-.3 3.02 1.13a10.5 10.5 0 012.75-.37c.93 0 1.87.12 2.75.37 2.1-1.43 3.02-1.13 3.02-1.13.6 1.53.22 2.65.11 2.93.7.78 1.13 1.77 1.13 2.98 0 4.26-2.6 5.19-5.08 5.47.39.34.74 1.02.74 2.07 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53A10.27 10.27 0 0023.25 11.74C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>

        {/* Nav Links - center */}
        <nav className="flex flex-col sm:flex-row justify-center items-center md:justify-center gap-4 sm:gap-8 mb-6 text-center md:text-left">
          <a href="#about" className="uppercase text-xl tracking-wide text-[#4C9AB7]">About Us</a>
          <a href="#services" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Services</a>
          <a href="#projects" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Projects</a>
          <a href="#contact" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Contact Us</a>
        </nav>

        {/* Contact info & logo */}
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-4 md:gap-20 text-blue-900">
          <div className="flex-shrink-0">
           <a href="#"> <img src={logo} alt="Entity Collective" className="h-20 w-auto" /></a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
           
            <div className="flex items-center gap-3">
              <svg className="h-8 w-8 p-1 text-white bg-[#2F6680] rounded-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.79a15.05 15.05 0 006.61 6.61l2.2-2.2a1 1 0 01.9-.27c1 .25 2.1.39 3.28.39a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.18.14 2.28.39 3.28a1 1 0 01-.27.9l-2.02 2.61z" />
              </svg>
              <span>+32 4 896 00 19 2</span>
            </div>
             <div className="flex items-center gap-3">
              <svg
                className="h-8 w-8 text-white bg-[#2F6680] p-1 rounded-full"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 
           2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
           2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <span>info@entitycollective.org</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2F6680] py-3 text-center text-white text-sm">
        © {new Date().getFullYear()} ENTITY COLLECTIVE
      </div>
    </footer>
  )
}