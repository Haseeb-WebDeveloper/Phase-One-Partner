"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "./button";


export default function AnimatedButton({ text, className, defaultBgColor }: { text: string, className?: string, defaultBgColor?: string }) {
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
    <div ref={buttonRef} className="z-20 group flex items-center w-fit relative mx-auto">
      <Button
        size="xl"
        className={`z-10 font-lato group-hover:pr-8 ${defaultBgColor ? `${defaultBgColor} text-background` : "bg-background text-primary"} border-[2px] border-primary hover:border-[#252acf] hover:bg-[#252acf]  hover:text-background md:text-lg font-medium rounded-full w-fit transition-all duration-300`}
      >
        {text}
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
  );
}