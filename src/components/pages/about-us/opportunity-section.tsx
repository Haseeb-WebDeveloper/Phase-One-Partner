import Image from "next/image";

export default function OpportunitySection() {
  return (
    <section className="relative w-full py-12 lg:py-20  px-4 sm:px-6 lg:px-16 border-t border-[#0224E9]">
           <div className="max-w-7xl mx-auto z-10">
        {/* Label */}
        <p className="text-center font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide mb-6 lg:mb-8">
          THE OPPORTUNITY
        </p>

        {/* Main Heading */}
        <p className="text-center font-inter text-[20px] md:text-[24px] lg:text-[28px] leading-[38px] text-black mb-12 lg:mb-16 max-w-5xl mx-auto">
          Across Australia and New Zealand, thousands of founder-led businesses
          are building momentum and scale while staying private. These businesses
          represent one of the most exciting investment landscapes in the world.
        </p>

        {/* Statistics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-[100px] mb-8 lg:mb-12 z-30">
          {/* Left Column */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0224e9] mb-2">
            64,000
            </div>
            <div className="text-base md:text-lg lg:text-xl text-black">
              mid-market companies operate in Australia.
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-[113px] border-l border-foreground/30"></div>

          {/* Middle Column */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0224e9] mb-2">
              98%
            </div>
            <div className="text-base md:text-lg lg:text-xl text-black">
              of private companies remain privately held.
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-[113px] border-l border-foreground/30"></div>

          {/* Right Column */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0224e9] mb-2">
            $60B
            </div>
            <div className="text-base md:text-lg lg:text-xl text-black">
            in private capital is now managed by institutional investors.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
