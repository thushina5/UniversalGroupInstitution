import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://www.universalinstitutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Universal Group of Institutions | PU, Degree & Integrated UPSC Training",
    template: "%s | Universal Institutions",
  },
  description:
    "Universal Group of Institutions is a Bengaluru PU and degree college with integrated IAS / IPS (UPSC & PSC) training across Science, Commerce, Arts and Bangalore University affiliated degrees.",
  keywords: [
    "Universal Group of Institutions",
    "PU college Bangalore",
    "integrated UPSC coaching",
    "IAS IPS training",
    "degree college Bangalore",
    "KAS KPSC coaching",
    "civil services foundation",
  ],
  authors: [{ name: "Universal Group of Institutions" }],
  creator: "Universal Group of Institutions",
  publisher: "Universal Group of Institutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Universal Group of Institutions",
    title:
      "Universal Group of Institutions | PU, Degree & Integrated UPSC Training",
    description:
      "PU and degree education with integrated IAS / IPS (UPSC & PSC) training in Bengaluru.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Group of Institutions Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Universal Group of Institutions | PU, Degree & Integrated UPSC Training",
    description:
      "PU and degree education with integrated IAS / IPS (UPSC & PSC) training in Bengaluru.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Universal Group of Institutions",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "PU and degree college in Bengaluru offering integrated IAS / IPS (UPSC & PSC) training alongside Science, Commerce, Arts and Bangalore University affiliated degree programs.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gururayanapura, Ramohalli Post, Tavarekere Hobli, Bangalore South",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560074",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-63668-16611",
    contactType: "admissions",
    email: "info@universalinstitutions.com",
  },
  sameAs: [
    "https://www.facebook.com/universalinstitutions",
    "https://www.linkedin.com/school/universalinstitutions",
    "https://twitter.com/universalinst",
    "https://www.youtube.com/universalinstitutions",
    "https://www.instagram.com/universalinstitutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
