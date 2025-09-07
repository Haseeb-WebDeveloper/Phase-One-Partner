"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
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
    <section className="w-full h-full pt-32 pb-16 max-w-[1600px] mx-auto px-6 lg:px-16 ">
      <div className="flex flex-col justify-center text-foreground gap-4 ">
        <h1 className="text-5xl  md:text-7xl font  line-through  relative">
      Bussiness Brokers
        </h1>
        <h1 className="text-5xl  md:text-7xl font-semibold  relative">
       Investment Partners
        </h1>
        <div className="space-y-2 mt-6  text-2xl max-w-xl font-medium">
         <p> <strong>The New Era of Deal Origination Starts Here.</strong></p>
          <p>We connect only the right businesses with the right investors — nothing less.</p>
        </div>
        <div className="mt-4">
          <div
            ref={buttonRef}
            className="relative z-10 group flex items-center justify-center w-fit"
          >
            <Button
              size="xl"
              className="z-10 group-hover:pr-8 bg-background border-[2px] border-foreground/60 hover:border-[#252acf] hover:bg-[#252acf] hover:text-background text-foreground md:text-lg font-medium rounded-full w-fit transition-all duration-300"
            >
              Book A Free Discovery Session Today
            </Button>
            <div
              ref={arrowRef}
              className="hidden md:block absolute right-0 -z-1 cursor-pointer"
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
    </section>
  );
}
