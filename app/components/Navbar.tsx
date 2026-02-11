"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/services' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-[1000] bg-white border-b-4 border-[#FFCB05] px-4 md:px-8 py-3 flex justify-center">
      <div className="max-w-7xl flex justify-between items-center w-full">
        
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img 
            src="https://littlejalebis.com/wp-content/uploads/2025/04/LJ_Logo_M-2.svg" 
            alt="Little Jalebis Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-bold text-[#333333] hover:text-[#F26522] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/quote" 
            className="bg-[#F26522] text-white font-black px-6 py-2 rounded-full shadow-[4px_4px_0px_#FFCB05] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#FFCB05] transition-all"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-7 h-1 bg-[#F26522] rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-7 h-1 bg-[#F26522] rounded-full ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-1 bg-[#F26522] rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 py-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-bold text-lg text-[#333333] hover:text-[#F26522]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="mx-auto bg-[#F26522] text-white font-black px-8 py-3 rounded-full shadow-[4px_4px_0px_#FFCB05]"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
