import { Facebook, Github, Linkedin, Instagram, Phone, Mail } from "lucide";

export default function Footer() {
  return (
    <div className="w-full bg-white">
      {/* Navigation Links and Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-center text-center md:text-left">
        {/* Logo */}
        <div className="col-span-1 flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Entity Collective"
            className="h-16 object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="flex justify-center">
          <a href="#" className="uppercase text-sm tracking-wide text-blue-900">About Us</a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="uppercase text-sm tracking-wide text-blue-900">Services</a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="uppercase text-sm tracking-wide text-blue-900">Projects</a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="uppercase text-sm tracking-wide text-blue-900">Contact Us</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 py-4">
        <a href="#" className="p-2 bg-blue-900 text-white rounded">
          <div className="h-4 w-4"><Facebook /></div>
        </a>
        <a href="#" className="p-2 bg-blue-900 text-white rounded">
          <div className="h-4 w-4"><Github /></div>
        </a>
        <a href="#" className="p-2 bg-blue-900 text-white rounded">
          <div className="h-4 w-4"><Linkedin /></div>
        </a>
        <a href="#" className="p-2 bg-blue-900 text-white rounded">
          <div className="h-4 w-4"><Instagram /></div>
        </a>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:justify-center items-center space-y-4 md:space-y-0 md:space-x-10 py-4 text-blue-900">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5"><Phone /></div>
          <span>+32 4 896 00 19 2</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5"><Mail /></div>
          <span>info@entitycollective.org</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 py-3 text-center text-white text-sm">
        © 2022 ENTITY COLLECTIVE
      </div>
    </div>
  );
}