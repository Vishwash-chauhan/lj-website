import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Star, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-[#FFCB05] pt-12 pb-6 px-4 flex flex-col items-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black text-[#F26522] uppercase tracking-tight">
              Little Jalebis Kids Party House & Catering Co.
            </h2>
          </div>
          <p className="text-[#333333] font-medium leading-relaxed italic">
            India's first tech-driven, kids centric catering company
          </p>
        </div>

        {/* Registered Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-[#F26522] pb-1 inline-block">
            Registered Address
          </h3>
          <div className="flex gap-3 text-[#333333] font-bold">
            <MapPin className="shrink-0 text-[#F26522]" size={20} />
            <address className="not-italic text-sm leading-6">
              E 5 Kalindi Colony<br />
              Near New Friends Colony<br />
              New Delhi 110065
            </address>
          </div>
        </div>

        {/* Kids Party House */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-[#F26522] pb-1 inline-block">
            Kids Party House
          </h3>
          <div className="flex gap-3 text-[#333333] font-bold">
            <MapPin className="shrink-0 text-[#F26522]" size={20} />
            <address className="not-italic text-sm leading-6">
              17, Lower Ground Floor<br />
              Arjun Marg DLF Phase-1<br />
              Gurgaon 122002
            </address>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-[#F26522] pb-1 inline-block">
            Get In Touch
          </h3>
          <div className="space-y-3 font-bold text-[#333333]">
            <a href="tel:+918130964374" className="flex items-center gap-3 hover:text-[#F26522] transition-colors">
              <Phone size={18} className="text-[#F26522]" />
              +91 81309 64374
            </a>
            <a href="mailto:sales@littlejalebis.com" className="flex items-center gap-3 hover:text-[#F26522] transition-colors">
              <Mail size={18} className="text-[#F26522]" />
              sales@littlejalebis.com
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://www.instagram.com/littlejalebis/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg">
              <Instagram size={18} className="text-[#F26522]" />
            </Link>
            <Link href="https://www.youtube.com/@LittleJalebis" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg">
              <Youtube size={18} className="text-[#F26522]" />
            </Link>
            <Link href="https://wa.me/918130964374" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg">
              <MessageCircle size={18} className="text-[#F26522]" />
            </Link>
            <Link href="https://g.co/kgs/nDc2ox6" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg">
              <Star size={18} className="text-[#F26522]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Line & Legal Links */}
      <div className="max-w-7xl mt-12 pt-6 border-t border-gray-100 text-center w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mb-2">
          <p className="text-xs md:text-sm font-bold text-[#333333] opacity-80">
            © 2026 Little Jalebis. All rights reserved. | Kids Party House & Catering Co.
          </p>
          <span className="hidden md:inline text-gray-300">|</span>
        </div>
        <p className="text-xs md:text-sm font-bold text-[#333333] opacity-80">
          Unit of NC Hospitality Pvt Ltd CIN : U55101DL2009PTC188581
        </p>
          <Link 
            href="/terms" 
            className="text-xs md:text-sm font-bold text-[#F26522] hover:underline decoration-2 transition-all"
          >
            Terms & Conditions
          </Link>
      </div>
    </footer>
  );
};

export default Footer;