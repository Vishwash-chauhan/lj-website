"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add a slight shadow/background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-4 md:px-12 py-4 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b-4 border-[#FFCB05] py-2' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Comic Neue', cursive" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-[1001] shrink-0 hover:scale-105 transition-transform">
          <img 
            src="https://littlejalebis.com/wp-content/uploads/2025/04/LJ_Logo_M-2.svg" 
            alt="Little Jalebis Logo" 
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 bg-white/50 px-8 py-3 rounded-full border-2 border-[#333333]/5 shadow-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-bold text-[15px] uppercase tracking-wider transition-colors duration-300 ${
                isActiveLink(link.href)
                  ? 'text-[#F26522] underline decoration-[#FFCB05] decoration-4 underline-offset-[6px]'
                  : 'text-[#333333] hover:text-[#F26522]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-[#F26522] text-white font-bold px-7 py-3 rounded-full shadow-[4px_4px_0px_#333333] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block text-sm uppercase tracking-widest"
          >
            Book a Party
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-[#FFCB05] rounded-xl shadow-[3px_3px_0px_#333333]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FFF9F2] z-[1000] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-bold text-4xl transition-all ${
                isActiveLink(link.href)
                  ? 'text-[#F26522] underline decoration-[#FFCB05] decoration-8 underline-offset-[10px]'
                  : 'text-[#333333] hover:text-[#F26522]'
              } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking"
            onClick={() => setIsOpen(false)}
            className={`mt-4 bg-[#F26522] text-white font-bold px-10 py-4 rounded-2xl text-xl shadow-[6px_6px_0px_#FFCB05] active:shadow-none transition-all ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            style={{ transitionDelay: `500ms` }}
          >
            Book a Party
          </Link>
        </div>
        
        {/* Playful background element for mobile menu */}
        <div className="absolute bottom-10 opacity-10 pointer-events-none">
             <img src="https://littlejalebis.com/wp-content/uploads/2025/04/LJ_Logo_M-2.svg" className="w-40 h-auto" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;