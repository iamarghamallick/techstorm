import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import NextTopLoader from 'nextjs-toploader';
import Loading from "@/components/Loading";

export const metadata = {
  title: "TECHSTORM 2.25",
  description: "Annual Technical Fest of BPPIMT - 2025",
  openGraph: {
    type: 'website',
    url: 'https://techstorm.bppimt.ac.in/',
    title: "TECHSTORM 2.25",
    description: "The flagship technical fest of B. P. Poddar Institute of Management and Technology, inspired by the limitless potential of the metaverse. Celebrating its 12th edition in 2025, TECHSTORM transcends boundaries, blending innovation and virtual realms to ignite the spirit of technological brilliance like never before.",
    images: [
      {
        url: 'https://techstorm.bppimt.ac.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Techstorm 2.25',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TECHSTORM 2.25",
    description: "The flagship technical fest of B. P. Poddar Institute of Management and Technology, inspired by the limitless potential of the metaverse. Celebrating its 12th edition in 2025, TECHSTORM transcends boundaries, blending innovation and virtual realms to ignite the spirit of technological brilliance like never before.",
    images: [
      {
        url: 'https://techstorm.bppimt.ac.in/og-image.png',
        alt: 'Techstorm 2.25',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' // spinner-icon class is kept hidden on globals.css
          zIndex={1600}
          showAtBottom={false}
        />

        <StarsBackground />

        <Header />

        {/* pre-loader  */}
        <Loading />

        {children}

        <Analytics />
        <SpeedInsights />

        <Footer />
      </body>
    </html>
  );
}
