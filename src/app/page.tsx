import HomeVideo from "@/components/pages/home/video";
import About from "@/components/pages/home/about";
import HeroSection from "@/components/pages/home/hero-section";
import Team from "@/components/pages/home/team";
import InvestorFounder from "@/components/pages/home/investor-founder";
import { WhoWeAre } from "@/components/pages/home/who-we-are";
import BlogSection from "@/components/pages/home/blog-section";
import { Spotlight } from "@/components/ui/spotlight-new";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#F0F0F0] lg:min-h-screen relative z-10 rounded-b-4xl">
        <div className="absolute bottom-0 right-0 lg:w-[80vw] w-[100vw] h-full max-h-[100vh] z-0 ">
          <div className="w-full h-full relative">
            <Image
              src="/hero-bg-chroped-2.png"
              alt="Hero Gradient Background"
              width={1000}
              height={1000}
              className="w-fit absolute bottom-0 h-full max-h-[1000px] lg:max-h-[800px] right-0"
            />
          </div>
        </div>
        <Navbar />
        <HeroSection />
      </div>
      <InvestorFounder />
      <HomeVideo />
      <Image
        src="/divider.png"
        alt="Who we are"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <WhoWeAre />
      <Image
        src="/divider.png"
        alt="Who we are"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <Team />
      <Image
        src="/divider.png"
        alt="Who we are"
        width={1000}
        height={1000}
        className="max-w-[1200px] mx-auto px-4 md:px-0 w-full h-full object-cover object-center"
      />
      <BlogSection />
      <About />
    </>
  );
}
