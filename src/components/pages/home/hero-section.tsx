"use client";
import AnimatedButton from "@/components/ui/animated-button";

export default function HeroSection() {

  return (
    <section className="w-full h-full pt-24 pb-16 max-w-[1600px] mx-auto px-6 lg:px-16 ">
      <div className="flex flex-col justify-center text-foreground gap-4 ">
        <h1 className="text-5xl  md:text-6xl font  line-through  relative">
      Bussiness Brokers
        </h1>
        <h1 className="text-5xl  md:text-6xl font-semibold  relative">
       Investment Partners
        </h1>
        <div className="space-y-2 mt-6  text-lg max-w-xl font-medium">
         <p> <strong>The New Era of Deal Origination Starts Here.</strong></p>
          <p>We connect only the right businesses with the right investors — nothing less.</p>
        </div>
        <div className="mt-4 w-fit">
          <AnimatedButton text="Book a Free Discovery Session Today" />
        </div>
      </div>
    </section>
  );
}
