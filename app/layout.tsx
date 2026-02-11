import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Jalebis | Kids Party House & Catering Co. | New Delhi & Gurgaon",
  description: "Award-winning kids party house and catering company in Delhi & Gurgaon. Unforgettable parties with delicious food, entertainment packages, and party venues.",
  keywords: "kids party, catering, party house, Delhi catering, Gurgaon party venue, children's parties, event catering, party planner",
  authors: [{ name: "Little Jalebis" }],
  openGraph: {
    title: "Little Jalebis | Kids Party House & Catering Co.",
    description: "Create magical memories with Little Jalebis - your trusted kids party house and catering partner.",
    url: "https://littlejalebis.com",
    siteName: "Little Jalebis",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Jalebis | Kids Party House & Catering",
    description: "Award-winning kids party house and catering company in Delhi & Gurgaon.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://littlejalebis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        {/* Header & Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
              src="https://res.cloudinary.com/dwffrfajl/image/upload/v1770034621/Little_Jalebis_Logo_lmpaxo.svg"
              alt="Little Jalebis Logo"
              className="h-10 w-auto"
              />
            </div>

            {/* Navigation Menu - Desktop */}
            <ul className="hidden md:flex gap-6 items-center">
              <li><a href="#home" className="font-semibold hover:text-orange-600 transition">Home</a></li>
              <li><a href="#services" className="font-semibold hover:text-orange-600 transition">Services</a></li>
              <li><a href="#menu" className="font-semibold hover:text-orange-600 transition">Menu</a></li>
              <li><a href="#about" className="font-semibold hover:text-orange-600 transition">About</a></li>
              <li><a href="#contact" className="font-semibold hover:text-orange-600 transition">Contact</a></li>
              <li>
                <a href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis%21%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20party" 
                   target="_blank" rel="noopener noreferrer"
                   className="cta-button text-sm">
                  Get A Quote
                </a>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <a href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis%21%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20party" 
                 target="_blank" rel="noopener noreferrer"
                 className="cta-button text-xs">
                Quote
              </a>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 py-10" style={{ backgroundColor: "var(--lj-bg)", borderTop: "3px solid var(--lj-yellow)" }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--lj-orange)" }}>Little Jalebis</h3>
                <p className="text-sm">Kids Party House & Catering Co.</p>
                <p className="text-xs text-gray-600 mt-2">Creating magical memories, one party at a time!</p>
              </div>

              {/* Registered Address */}
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--lj-orange)" }}>Registered Address</h4>
                <p className="text-sm leading-relaxed">
                  E 5 Kalindi Colony<br />
                  Near New Friends Colony<br />
                  New Delhi 110065
                </p>
              </div>

              {/* Party Venue */}
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--lj-orange)" }}>Party Venue</h4>
                <p className="text-sm leading-relaxed">
                  17, Arjun Marg<br />
                  DLF Phase-1<br />
                  Gurgaon 122002
                </p>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="font-bold mb-2" style={{ color: "var(--lj-orange)" }}>Get In Touch</h4>
                <p className="text-sm mb-2">
                  📞 <a href="tel:+918130964374" className="font-semibold">+91 81309 64374</a>
                </p>
                <p className="text-sm mb-3">
                  📧 <a href="mailto:sales@littlejalebis.com" className="font-semibold">sales@littlejalebis.com</a>
                </p>
                <div className="flex gap-3 mt-3">
                  <a href="https://www.instagram.com/littlejalebis/?hl=en" target="_blank" rel="noopener noreferrer" 
                     title="Instagram" className="text-xl hover:scale-110 transition">📷</a>
                  <a href="https://www.zomato.com/ncr/little-jalebis-kids-catering-delivery-co-friends-colony-new-delhi" target="_blank" rel="noopener noreferrer"
                     title="Zomato" className="text-xl hover:scale-110 transition">🍽️</a>
                  <a href="https://wa.me/918130964374" target="_blank" rel="noopener noreferrer"
                     title="WhatsApp" className="text-xl hover:scale-110 transition">💬</a>
                  <a href="https://g.co/kgs/nDc2ox6" target="_blank" rel="noopener noreferrer"
                     title="Google Reviews" className="text-xl hover:scale-110 transition">⭐</a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "2px solid var(--lj-yellow)", margin: "2rem 0" }}></div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-600">
              <p>&copy; 2026 Little Jalebis. All rights reserved. | <span style={{ color: "var(--lj-orange)" }}>Kids Party House & Catering Co.</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
