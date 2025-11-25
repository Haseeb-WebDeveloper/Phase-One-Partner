"use client";

import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

export default function AboutUsHeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[478px] lg:min-h-[976px] pt-[165px] lg:pt-[266.7px]">
        {/* Background decorative elements Image */}
        <div className="absolute top-50 -right-50 bottom-0 overflow-visible pointer-events-none z-0">
          <Image
            src="/images/About-us-images/Mask group.svg"
            alt="Mask group"
            width={1000}
            height={1000}
            className="h-full w-auto object-contain opacity-100"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-2 lg:mb-4">
            ABOUT US
          </h1>
          <p className="font-inter text-[16px] lg:text-[28px] text-white mb-4 lg:mb-8 max-w-[400px] lg:max-w-none mx-auto">
            Connecting founders & investors for lasting success.
          </p>
          <div className="w-fit mx-auto">
            <AnimatedButton
              text="Book a Free Discovery Session Today"
              variant="inverse"
            />
          </div>
        </div>

        {/* Image Gallery - Grid Layout */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full mt-12 lg:mt-8 overflow-x-visible">
          <div className="flex gap-2 lg:gap-6 w-full justify-between px-4 lg:px-16">
            {/* 1st column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/Rectangle 21.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/Rectangle 20.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* 2nd column  */}
            <div className="flex flex-col item-center justify-end w-[40%]">
              <div
                className="w-full h-[80%] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/Rectangle 35.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* 3rd column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/Rectangle 19.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/Rectangle 18.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* absolute position left right images */}
            <div className="absolute top-1/2 -translate-y-1/2 md:left-[-270px] left-[-295px]">
              <div
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/background.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 md:right-[-270px] right-[-295px]">
              <div
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/images/About-us-images/background.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}