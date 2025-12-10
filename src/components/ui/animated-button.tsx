"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

// variant = "primary" | "secondary"
// - "primary": old style (default, bg=background, text=primary, hover bg = primary, text=background)
// - "inverse": new style, bg=background, text=primary, hover:bg=primary/5, text=background

export default function AnimatedButton({
  text,
  className = "",
  defaultBgColor,
  variant = "primary",
  href,
}: {
  text: string;
  className?: string;
  defaultBgColor?: string;
  variant?: "primary" | "inverse";
  href?: string;
}) {
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

  // font-lato is a font-family that is used in the button
  // Decide classes based on variant and defaultBgColor
  let buttonClass = "z-10 group-hover:pr-8 md:text-lg font-medium rounded-full w-fit transition-all duration-300";
  let bgAndText = "";

  if (defaultBgColor) {
    // Keep legacy behaviour if defaultBgColor is provided
    bgAndText = `${defaultBgColor} text-background border-[2px] border-primary hover:border-[#252acf] hover:bg-[#252acf] hover:text-background`;
  } else if (variant === "inverse") {
    // "Inverse": bg-background, text-primary, hover: bg-primary/5, text-background
    // use bg-primary/5 as bg color (Tailwind: bg-primary/5)
    bgAndText = "bg-background text-primary border-[2px] border-primary hover:bg-[#252acf] hover:text-background hover:border-background";
  } else {
    // Default "primary" variant
    bgAndText = "bg-background text-primary border-[2px] border-primary hover:border-[#252acf] hover:bg-[#252acf]  hover:text-background";
  }

  return (
    <div
      ref={buttonRef}
      className={`z-20 group flex items-center w-fit relative mx-auto ${className}`}
    >
      {href ? (
        <Button size="xl" className={`${buttonClass} ${bgAndText}`} asChild>
          <Link href={href}>{text}</Link>
        </Button>
      ) : (
        <Button size="xl" className={`${buttonClass} ${bgAndText}`}>
          {text}
        </Button>
      )}
      <div
        ref={arrowRef}
        className="hidden md:block absolute right-0 cursor-pointer"
      >
        <Image
          src={`/icons/${variant === "inverse" ? "right-white" : "right"}.svg`}
          alt="arrow"
          width={50}
          height={50}
          className="w-14 h-14 -rotate-45"
        />
      </div>
    </div>
  );
}