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
      <div className="text-background min-h-screen"
      style={{
        backgroundImage: "url('/hero-gradient-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        {/* <Spotlight /> */}
        <Navbar />
        <HeroSection />
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
