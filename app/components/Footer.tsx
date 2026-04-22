import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Star, Youtube } from 'lucide-react';

const cityPages = [
  {
    href: '/services/kids-party-catering-delhi',
    label: 'Kids Party Catering Delhi',
  },
  {
    href: '/services/kids-party-catering-gurgaon',
    label: 'Kids Party Catering Gurgaon',
  },
  {
    href: '/services/kids-party-catering-noida',
    label: 'Kids Party Catering Noida',
  },
  {
    href: '/services/kids-party-catering-ghaziabad',
    label: 'Kids Party Catering Ghaziabad',
  },
  {
    href: '/services/kids-party-catering-faridabad',
    label: 'Kids Party Catering Faridabad',
  },
  {
    href: '/services/kids-party-venue-gurgaon',
    label: 'Kids Party Venue Gurgaon',
  },
];

const footerLinks = [
  { href: '/blog', label: 'Blogs' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms&conditions', label: 'Terms & Conditions' },
];

const Footer = () => {
  return (
    <footer className="border-t-4 border-[#FFCB05] bg-white px-4 pt-12 pb-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1.15fr_0.95fr_1.1fr_1.3fr]">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#F26522]">
                Little Jalebis Kids Party House & Catering Co.
              </h2>
              <p className="max-w-md text-sm font-medium italic leading-relaxed text-[#333333]">
                India&apos;s first tech-driven, kids centric catering company for high-energy parties, curated menus, and memorable celebrations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="https://www.instagram.com/littlejalebis/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Little Jalebis Instagram" className="rounded-lg border border-[#F26522]/15 p-2 transition-colors hover:bg-[#FFF4EC]">
                <Instagram size={18} className="text-[#F26522]" />
              </Link>
              <Link href="https://www.youtube.com/@LittleJalebis" target="_blank" rel="noopener noreferrer" aria-label="Little Jalebis YouTube" className="rounded-lg border border-[#F26522]/15 p-2 transition-colors hover:bg-[#FFF4EC]">
                <Youtube size={18} className="text-[#F26522]" />
              </Link>
              <Link href="https://wa.me/918130964374" target="_blank" rel="noopener noreferrer" aria-label="Little Jalebis WhatsApp" className="rounded-lg border border-[#F26522]/15 p-2 transition-colors hover:bg-[#FFF4EC]">
                <MessageCircle size={18} className="text-[#F26522]" />
              </Link>
              <Link href="https://g.co/kgs/nDc2ox6" target="_blank" rel="noopener noreferrer" aria-label="Little Jalebis Google Reviews" className="rounded-lg border border-[#F26522]/15 p-2 transition-colors hover:bg-[#FFF4EC]">
                <Star size={18} className="text-[#F26522]" />
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-[#F26522]">Get In Touch</h3>
              <div className="space-y-3 text-sm font-bold text-[#333333]">
                <a href="tel:+918130964374" className="flex items-center gap-3 transition-colors hover:text-[#F26522]">
                  <Phone size={18} className="text-[#F26522]" />
                  +91 81309 64374
                </a>
                <a href="mailto:sales@littlejalebis.com" className="flex items-center gap-3 transition-colors hover:text-[#F26522]">
                  <Mail size={18} className="text-[#F26522]" />
                  sales@littlejalebis.com
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-black text-[#F26522]">Quick Links</h3>
              <nav className="grid gap-2 text-sm font-bold text-[#333333]">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-[#F26522]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-black text-[#F26522]">Visit Us</h3>
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#FFF8EF] p-4">
                <div className="mb-2 text-sm font-black uppercase tracking-wide text-[#F26522]">
                  Registered Address
                </div>
                <div className="flex gap-3 text-[#333333]">
                  <MapPin className="shrink-0 text-[#F26522]" size={20} />
                  <address className="not-italic text-sm font-bold leading-6">
                    E 5 Kalindi Colony<br />
                    Near New Friends Colony<br />
                    New Delhi 110065
                  </address>
                </div>
              </div>
              <div className="rounded-2xl bg-[#FFF8EF] p-4">
                <div className="mb-2 text-sm font-black uppercase tracking-wide text-[#F26522]">
                  Kids Party House
                </div>
                <div className="flex gap-3 text-[#333333]">
                  <MapPin className="shrink-0 text-[#F26522]" size={20} />
                  <address className="not-italic text-sm font-bold leading-6">
                    17, Lower Ground Floor<br />
                    Arjun Marg DLF Phase-1<br />
                    Gurgaon 122002
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="text-lg font-black text-[#F26522]">City Pages</h3>
            </div>
            <nav className="grid gap-2 text-sm font-bold text-[#333333]">
              {cityPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="py-1 transition-colors hover:text-[#F26522] md:rounded-xl md:border md:border-[#F26522]/10 md:px-4 md:py-3 md:hover:bg-[#FFF4EC]"
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xs font-bold text-[#333333] opacity-80 md:text-sm">
              © 2026 Little Jalebis. All rights reserved. | Kids Party House & Catering Co.
            </p>
            <p className="text-xs font-bold text-[#333333] opacity-80 md:text-sm">
              Unit of NC Hospitality Pvt Ltd CIN : U55101DL2009PTC188581
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold md:justify-end md:text-sm">
            {footerLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-3">
                {index > 0 ? <span className="text-gray-300">|</span> : null}
                <Link
                  href={link.href}
                  className="text-[#F26522] transition-all hover:underline decoration-2"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;