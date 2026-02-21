"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu Toggle
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // Dropdown/Accordion Toggle
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu automatically if screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serviceItems = [
    { name: 'Catering', href: '/services?tab=catering' },
    { name: 'Kids Party House', href: '/services?tab=venue' },
    { name: 'Food Delivery & Boxes', href: '/services?tab=boxes' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 px-4 md:px-12 py-4 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b-4 border-[#FFCB05] py-2' : 'bg-transparent'
        }`}
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="relative z-[80] shrink-0 hover:scale-105 transition-transform">
            <img 
              src="https://littlejalebis.com/wp-content/uploads/2025/04/LJ_Logo_M-2.svg" 
              alt="Little Jalebis Logo" 
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 bg-white/50 px-8 py-3 rounded-full border-2 border-[#333333]/5 shadow-sm">
            {/* Home & About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`font-bold text-[15px] uppercase tracking-wider transition-colors ${
                  isActiveLink(link.href) ? 'text-[#F26522] underline decoration-[#FFCB05] decoration-4 underline-offset-[6px]' : 'text-[#333333] hover:text-[#F26522]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown (Desktop) */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 font-bold text-[15px] uppercase tracking-wider transition-colors ${
                  pathname.includes('/services') ? 'text-[#F26522]' : 'text-[#333333] hover:text-[#F26522]'
                }`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-2xl shadow-xl border-2 border-[#FFCB05] overflow-hidden transition-all duration-300 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-4 text-[#333333] hover:bg-[#FFF9F2] hover:text-[#F26522] font-bold text-sm uppercase tracking-wide border-b border-gray-100 last:border-0 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu & Contact */}
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`font-bold text-[15px] uppercase tracking-wider transition-colors ${
                  isActiveLink(link.href) ? 'text-[#F26522] underline decoration-[#FFCB05] decoration-4 underline-offset-[6px]' : 'text-[#333333] hover:text-[#F26522]'
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
              className="bg-[#F26522] text-white font-bold px-7 py-3 rounded-full shadow-[4px_4px_0px_#333333] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block text-sm uppercase tracking-widest"
            >
              Book a Party
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden relative z-[80] w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-[#FFCB05] rounded-xl shadow-[3px_3px_0px_#333333]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FFF9F2] z-[60] flex flex-col transition-all duration-500 md:hidden ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center w-full px-8 pt-20 pb-10 overflow-y-auto">
            
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-3xl uppercase tracking-tight">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-3xl uppercase tracking-tight">About</Link>
            
            {/* Mobile Services Accordion - Spacing fixed here */}
            <div className="w-full max-w-xs">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-center gap-3 font-bold text-3xl uppercase tracking-tight transition-colors ${servicesOpen ? 'text-[#F26522]' : 'text-[#333333]'}`}
              >
                Services
                <svg className={`w-6 h-6 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out ${servicesOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden flex flex-col gap-4 bg-white/40 rounded-2xl">
                  {serviceItems.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-[#333333] font-medium text-xl first:pt-4 last:pb-4 hover:text-[#F26522] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/menu" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-3xl uppercase tracking-tight">Menu</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-3xl uppercase tracking-tight">Contact</Link>
            
            <Link 
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-[#F26522] text-white font-bold px-10 py-4 rounded-2xl text-xl shadow-[6px_6px_0px_#FFCB05] active:shadow-none transition-all active:translate-x-1 active:translate-y-1"
            >
              Book a Party
            </Link>
          </div>
      </div>
    </>
  );
};

export default Navbar;