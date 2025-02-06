import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import NextTopLoader from 'nextjs-toploader';
import Loading from "@/components/Loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TECHSTORM 2.25",
  description: "Annual Technical Fest of BPPIMT - 2025",
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
        <Footer />
      </body>
    </html>
  );
}
