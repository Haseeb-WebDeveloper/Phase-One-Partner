"use client";

import AnimatedButton from "@/components/ui/animated-button";

export default function FounderHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-16 ">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Partners for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">growth</span>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 80"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="100"
                  cy="40"
                  rx="90"
                  ry="35"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <div className="text-xl md:text-2xl text-white mb-10">
            <p>Helping entrepreneurs achieve their vision.</p>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <AnimatedButton text="Book a discovery session today' " href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
