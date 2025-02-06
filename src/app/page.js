import Details from "@/components/Details";
import Events from "@/components/Events";
import Apk from "@/components/Apk";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home-container flex justify-center relative">

      {/* background effects  */}
      {/* meta girl  */}
      <Image priority src='/assets/bg/meta_girl.png' width={1000} height={1000} alt='background' className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 top-0 h-screen w-auto object-cover max-w-none z-20" style={{
        mixBlendMode: 'plus-lighter',
      }} />

      {/* left most side */}
      <Image priority src='/assets/bg/gradient-1.svg' width={1000} height={1000} alt='background' className="absolute h-[1024px] w-[908px] top-[-100px] md:top-auto left-[-200px] md:left-[-384px]" />

      {/* right most side */}
      <Image priority src='/assets/bg/gradient-2.svg' width={1000} height={1000} alt='background' className="absolute h-[1300px] w-[1400px] left-[-200px] md:left-[779px] top-[200px] md:top-[-236.46px]" />

      {/* top center  */}
      <Image priority src='/assets/bg/gradient-3.svg' width={1000} height={1000} alt='background' className="absolute h-[800px] w-[700px] top-[-300px]" />

      {/* right bottom corner */}
      <Image priority src='/assets/bg/gradient-4.svg' width={1000} height={1000} alt='background' className="absolute h-[630px] w-[630px] left-[50px] md:left-[700px] top-[800px] md:top-[900px]" />

      {/* background effects ends here  */}

      <div className="mt-[60px] md:mt-24 container md:px-20">
        <Hero />
        <Details />
        <Gallery />
        <Events />
        <Faq />
        <Apk />
      </div>
    </main>
  );
}
