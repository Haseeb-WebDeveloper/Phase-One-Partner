import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-16">
      {/* Very light shadow at bottom center */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-px opacity-30"
        style={{
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.02)",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <p className="text-sm lg:text-base font-medium text-[#0224e9] uppercase tracking-wider mb-6 lg:mb-8 font-inter">
          OUR MISSION
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 lg:mb-8 font-manrope">
          To <span className="text-[#0224e9]">redefine the way</span> private capital connects with private enterprise.
        </h2>

        {/* Description Paragraph */}
        <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-inter max-w-2xl mx-auto">
          PhaseOne Partners believes successful outcomes start long before a deal is secured. We help business owners grow and capital partners achieve the best possible outcome.
        </p>
      </div>


    </section> 
  );
}