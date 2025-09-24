import logo from '../assets/images/navlogo.png'
 import { Facebook, Instagram, Github, Youtube, Phone, Mail, MessageCircle } from "lucide-react";



const Footer = () => {
  return (
    <div className="pt-5 w-full">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-8 w-full">
          {/* Social icons - top */}
          <div className="flex justify-center space-x-4 mb-6">
            {/* ...social icons */}
          </div>

          {/* Nav Links - center */}
          <nav className="flex flex-col sm:flex-row justify-center items-center md:justify-center gap-4 sm:gap-12 mb-6 text-center md:text-left w-full">
            <a href="#about" className="uppercase text-xl tracking-wide text-[#4C9AB7]">About Us</a>
            <a href="#services" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Services</a>
            <a href="#projects" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Projects</a>
            <a href="#contact" className="uppercase text-xl tracking-wide text-[#4C9AB7]">Contact Us</a>
          </nav>

          {/* Contact info & logo */}
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-12 text-blue-900 flex-wrap w-full">
            <div className="flex-shrink-0">
              <a href="#">
                <img src={logo} alt="Entity Collective" className="h-20 w-auto max-w-full object-contain" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <Phone className="h-8 w-8 p-1 text-white bg-[#2F6680] rounded-full" />
                <span className="text-sm sm:text-base">+32 4 896 00 19 2</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-white bg-[#2F6680] p-1 rounded-full" />
                <span className="text-sm sm:text-base">info@entitycollective.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2F6680] w-full py-3 text-center text-white text-sm">
          © 2025 ENTITY COLLECTIVE
        </div>
      </div>
    </div>
  )
}
export default Footer
