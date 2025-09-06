import HomeVideo from "@/components/pages/home/video";
import About from "@/components/pages/home/about";
import HeroSection from "@/components/pages/home/hero-section";
import Team from "@/components/pages/home/team";
import InvestorFounder from "@/components/pages/home/investor-founder";
import { WhoWeAre } from "@/components/pages/home/who-we-are";
import BlogSection from "@/components/pages/home/blog-section";
import { Spotlight } from "@/components/ui/spotlight-new";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <div
        className="text-background gradient-background"
        // style={{
        //   background: "linear-gradient(to bottom right, #252acf 0%, #ffffff 50%, #040bc0 100%)",
        // }}
      >
        {/* <Spotlight /> */}
        <Navbar bg="background" bgOnScrolled="background" />
        <div className="min-h-screen w-full relative">
          {/* Bottom Fade Grid Background */}
          {/* <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, #040bc0 1px, transparent 1px),
        linear-gradient(to bottom, #040bc0 1px, transparent 1px)
      `,
              backgroundSize: "20px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
            }}
          /> */}
          <HeroSection />
        </div>
      </div>
      <InvestorFounder />
      <HomeVideo />
      <WhoWeAre />
      <Team />
      <BlogSection />
      <About />
    </>
  );
}
