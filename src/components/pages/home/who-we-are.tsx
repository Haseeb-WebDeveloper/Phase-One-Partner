"use client";

import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export function WhoWeAre() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const arrowElement = arrowRef.current;

    if (!buttonElement || !arrowElement) return;

    const handleMouseEnter = () => {
      gsap.to(arrowElement, {
        right: "-3.2rem",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrowElement, {
        right: "0rem",
        zIndex: -1,
        duration: 0.5,
        opacity: 0,
        ease: "power2.out",
      });
    };

    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 bg-foreground/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 w-full lg:w-[45%]">
            <div className="space-y-4">
              <p className="text-3xl lg:text-5xl font-bold">We get to work</p>
            </div>
            <p className="text-lg lg:text-2xl">
              Our services are hands-on, deeply involved, and designed to move
              deals forward.
            </p>
            <div className="mt-6 relative w-fit">
              <div
                ref={buttonRef}
                className="z-50 group flex items-center w-fit"
              >
                <Button
                  size="xl"
                  className="z-10 group-hover:pr-8 bg-background border-[2px] border-foreground/60 hover:border-primary hover:bg-primary hover:text-background text-foreground md:text-lg font-medium rounded-full w-fit transition-all duration-300"
                >
                  Explore Our Services
                </Button>
                <div
                  ref={arrowRef}
                  className="hidden md:block absolute right-0 cursor-pointer"
                >
                  <Image
                    src="/icons/right.svg"
                    alt="arrow"
                    width={50}
                    height={50}
                    className="w-14 h-14 -rotate-45"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className=" w-full lg:w-[55%]">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/we-are.jpg"
                alt="Who we are"
                className="w-full h-full object-cover object-center z-5 rounded"
                width={800}
                height={800}
              />
              <div className="absolute -top-3 -right-3 w-[50%] h-[80%] bg-primary rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
