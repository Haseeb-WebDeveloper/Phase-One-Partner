"use client";

import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedButton from "@/components/ui/animated-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WhoWeAre() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const mobileTagRef = useRef<HTMLImageElement>(null);
  const mobileHighlightRef = useRef<HTMLParagraphElement>(null);
  const desktopTagRef = useRef<HTMLImageElement>(null);
  const desktopHighlightRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  // Scroll animations for mobile only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const mobileTag = mobileTagRef.current;
    const mobileHighlight = mobileHighlightRef.current;
    const content = contentRef.current;

    if (!mobileTag || !mobileHighlight || !content) return;

    // Animate tag and text together - trigger at section start
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top bottom", // Trigger as soon as content enters viewport
        end: "top 60%",
        toggleActions: "play none none none", // No reverse - stay visible
      },
    });

    // Animate tag on scroll - start visible but slightly scaled
    tl.fromTo(
      mobileTag,
      {
        scale: 0.8,
        opacity: 0.3,
        y: -10,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    // Animate highlight text - start at same time
    tl.fromTo(
      mobileHighlight,
      {
        opacity: 0,
        y: 10,
        backgroundColor: "transparent",
      },
      {
        opacity: 1,
        y: 0,
        backgroundColor: "#c0c8f9",
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.5" // Start almost at the same time as tag
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10">
      <Image
        src="/2nd-section-bg.png"
        alt="Who we are"
        width={1000}
        height={1000}
        className="z-[-1] object-cover w-fit h-fit max-h-[800px] absolute -top-52 -left-12 opacity-60"
      />
      <Image
        src="/2nd-section-bg.png"
        alt="Who we are"
        width={1000}
        height={1000}
        className="z-10 object-cover w-fit h-fit max-h-[800px] absolute -top-40 -left-12 opacity-50"
      />
      <div
        ref={contentRef}
        className="max-w-[1200px] rounded-4xl mx-auto py-24 lg:py-24 px-6 lg:px-12 bg-background"
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(255,255,255,0.30), 0 1.5px 6px 0 rgba(255,255,255,0.40)",
        }}
      >
        {/* Desktop */}
        <div className="hidden lg:flex relative  gap-3 w-fit text-3xl lg:text-4xl xl:text-[62px] max-w-4xl mx-auto font-extrabold text-[#333333]">
          <p>We Get To </p>
          <p className="bg-[#c0c8f9] rounded-l-lg px-2 border-r-5 border-primary">
            Work
          </p>
          <Image
            src="/logo-tip.svg"
            alt="arrow-right"
            width={400}
            height={400}
            className="absolute -right-[6.45rem] -top-[2rem] w-fit h-8"
            priority
            quality={100}
          />
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative flex gap-3 w-fit text-3xl lg:text-4xl xl:text-[62px] max-w-4xl mx-auto font-extrabold text-[#333333]">
          <p>We Get To </p>
          <p
            ref={mobileHighlightRef}
            className="bg-[#c0c8f9] rounded-l-lg px-2 border-r-5 border-primary"
          >
            Work
          </p>
          <Image
            ref={mobileTagRef}
            src="/logo-tip.svg"
            alt="PhaseOne tag"
            width={400}
            height={400}
            className="absolute -right-[3.5rem] -top-[1.8rem] w-fit h-10 lg:h-5"
            priority
            quality={100}
          />
        </div>

        <p className="text-xl lg:text-[26px] text-pretty pt-6 text-[#333333] text-center">
          Our services are hands-on, deeply involved, and designed to move deals
          forward.
        </p>
        <div className="relative flex items-center justify-center mt-16">
          <Image
            src="/images/we-are.jpg"
            alt="Who we are"
            width={800}
            height={800}
            className="w-full h-full lg:max-h-[500px] max-h-[650px] z-5 rounded-4xl object-cover object-top border-4 border-primary"
            quality={100}
          />
        </div>
        <div className="mt-16 w-fit mx-auto">
          <AnimatedButton text="Explore Our Services" defaultBgColor="bg-primary" />
        </div>
      </div>
    </section>
  );
}
