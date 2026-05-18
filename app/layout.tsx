import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import ConditionalFooter from "./components/ConditionalFooter";
import ConditionalWhatsApp from "./components/ConditionalWhatsApp";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Jalebis | Kids Party House & Catering Co. | Delhi & NCR",
  description: "Award-winning kids party house and catering company in Delhi, NCR, Gurgaon, Noida, Faridabad, Ghaziabad. Unforgettable parties with delicious food, entertainment packages, and party venue.",
  keywords: "kids party, catering, party house, Delhi catering, Gurgaon party venue, children's parties, event catering, party planner",
  authors: [{ name: "Little Jalebis" }],
  icons: {
    icon: [
      { url: "images/favicon/16_x3shub.png", sizes: "16x16", type: "image/png" },
      { url: "images/favicon/48_hwit1b.png", sizes: "48x48", type: "image/png" },
      { url: "images/favicon/128_v5iyu7.png", sizes: "128x128", type: "image/png" },
      { url: "images/favicon/192_susmf6.png", sizes: "192x192", type: "image/png" }
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://littlejalebis.com/#organization",
      name: "Little Jalebis",
      url: "https://littlejalebis.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://littlejalebis.com/Logo_ymnwvm.svg",
      },
      sameAs: [
        "https://www.instagram.com/littlejalebis/?",
        "https://www.facebook.com/people/Little-Jalebis-Kids-Catering-Delivery-Co/61556063223622/",
        "https://www.youtube.com/@LittleJalebis",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://littlejalebis.com/#localbusiness",
      name: "Little Jalebis",
      image: "https://littlejalebis.com/Logo_ymnwvm.svg",
      url: "https://littlejalebis.com/",
      telephone: "+91-8130964374",
      email: "sales@littlejalebis.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "E 5 Kalindi Colony, Near New Friends Colony",
        addressLocality: "New Delhi",
        postalCode: "110065",
        addressCountry: "IN",
      },
      areaServed: ["Delhi NCR", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
      priceRange: "$$",
    },
    {
      "@type": "Service",
      "@id": "https://littlejalebis.com/#service",
      name: "Kids Catering & Party Services",
      provider: {
        "@id": "https://littlejalebis.com/#localbusiness",
      },
      areaServed: {
        "@type": "Place",
        name: "Delhi NCR",
      },
      serviceType: ["Kids Catering", "Birthday Party Catering", "Event Catering", "Party Setup Services"],
      description:
        "Customized kids catering and party services including themed food, event setup, and delivery.",
    },
    {
      "@type": "WebSite",
      "@id": "https://littlejalebis.com/#website",
      url: "https://littlejalebis.com/",
      name: "Little Jalebis",
      publisher: {
        "@id": "https://littlejalebis.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://littlejalebis.com/#homepage",
      url: "https://littlejalebis.com/",
      name: "Kids Catering Services in Delhi NCR | Little Jalebis",
      isPartOf: {
        "@id": "https://littlejalebis.com/#website",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://littlejalebis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17043665136"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17043665136');
          `}
        </Script>
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
