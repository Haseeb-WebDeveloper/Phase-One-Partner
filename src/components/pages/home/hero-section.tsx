"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    const button = buttonRef.current;
    
    if (!arrow || !button) return;

    // Initial state - hide arrow
    gsap.set(arrow, {
      opacity: 0,
      x: -50,
      scale: 0.8
    });

    const handleMouseEnter = () => {
      gsap.to(arrow, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        opacity: 0,
        x: -30,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full h-full min-h-[100vh]  flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center">
        <h1 className="p-6 text-7xl font-bold">Partners for growth</h1>
        <div className="space-y-3 text-center text-2xl font-medium">
          <p>Helping entrepreneurs achieve their vision.</p>
          <p>Expertise, coupled with ambition.</p>
        </div>
        <div className="mt-6">
          <div className="relative flex items-center justify-center w-fit  mx-auto">
            <Button
              ref={buttonRef}
              size="xl"
              className="bg-background border border-primary text-foreground text-lg font-medium rounded-full w-fit transition-all duration-300 hover:pr-16"
            >
              Book A Free Discovery Session Today
            </Button>
            <div
              ref={arrowRef}
              className="absolute right-2 w-10 h-10 bg-foreground rounded-full flex items-center justify-center pointer-events-none"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-background"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
