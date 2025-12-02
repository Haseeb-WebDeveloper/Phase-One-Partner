"use client";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
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
    <section className="w-full h-full pt-28 lg:pt-40 pb-32 lg:pb-36 max-w-[1600px] mx-auto px-6 lg:px-16 lg:min-h-screen [@media(min-width:1600px)]:min-h-auto relative z-10 bg-[#f0f0f0]">


      <div className="absolute bottom-0 right-0 lg:w-[80vw] w-[100vw] h-full max-h-[100vh] z-0 ">
        <div className="w-full h-full relative">
          <Image
            src="/hero-bg-chroped-2.png"
            alt="Hero Section Background"
            width={1000}
            height={1000}
            className="w-fit absolute bottom-0 h-full max-h-[1000px] lg:max-h-[800px] right-0"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center text-foreground gap-4 font-manrope text-center mx-auto max-w-full">
        <h3 className="text-5xl leading-[110%] md:text-[78px] font-manrope font-light uppercase relative">
          <span
            className="relative inline-block"
            style={{
              textDecoration: "line-through",
              textDecorationColor: "oklch(42.69% 0.24 269.16)", // matches --primary
              textDecorationThickness: "4px",
            }}
          >
            Business Brokers
          </span>
        </h3>
        <h1 className="text-5xl leading-[110%] md:text-[78px] lg:font-semibold font-extrabold uppercase text-pretty text-primary relative">
          Investment Partners
        </h1>
        <div className="space-y-6 lg:mt-12 mt-6 z-10">
          <p className="text-3xl lg:text-[36px] font-bold font-manrope lg:leading-[100%]">
            The New Era of{" "}
            <span
              className="underline"
              style={{
                textDecorationColor: "oklch(42.69% 0.24 269.16)", // matches --primary
                textUnderlineOffset: "4px",
                textDecorationThickness: "4px",
              }}
            >
              Deal Origination
            </span>{" "}
            Starts Here.
          </p>
          <p className="text-xl  lg:text-[29.57px] ">
            We connect only the right businesses with the right investors —
            nothing less.
          </p>
        </div>
        <div className="lg:mt-12 mt-6 w-fit mx-auto">
          <AnimatedButton text="Book A Free Discovery Session Today" />
        </div>
      </div>
    </section>
  );
}
