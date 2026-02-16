import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ConditionalFooter from "./components/ConditionalFooter";
import ConditionalWhatsApp from "./components/ConditionalWhatsApp";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Jalebis | Kids Party House & Catering Co. | New Delhi & Gurgaon",
  description: "Award-winning kids party house and catering company in Delhi & Gurgaon. Unforgettable parties with delicious food, entertainment packages, and party venue.",
  keywords: "kids party, catering, party house, Delhi catering, Gurgaon party venue, children's parties, event catering, party planner",
  authors: [{ name: "Little Jalebis" }],
  icons: {
    icon: [
      { url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1768908552/16_x3shub.png", sizes: "16x16", type: "image/png" },
      { url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1768908552/48_hwit1b.png", sizes: "48x48", type: "image/png" },
      { url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1768908552/128_v5iyu7.png", sizes: "128x128", type: "image/png" },
      { url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1768908552/192_susmf6.png", sizes: "192x192", type: "image/png" }
    ]
  },
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
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        <ConditionalWhatsApp />
        <ConditionalFooter />
      </body>
    </html>
  );
}
