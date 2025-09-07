"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-32 max-w-[1600px] mx-auto px-6 lg:px-16 w-full space-y-[6vw]">
      <h3 className="lg:max-w-[90%] font-medium lg:font-bold text-2xl md:text-3xl lg:text-[40px] lg:tracking-tight lg:leading-[150%] leading-[160%] ">
        To this day, our focus on developing <span className="bg-primary text-background px-2">strong relationships</span> with <span className="bg-secondary text-background px-2">founders and managers</span> remains central to our success enabling us to adapt our proven model to the individual needs of each <span className="bg-foreground text-background px-2">portfolio company.</span>
      </h3>
    </div>
  );
}
