"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-32 max-w-[83vw] w-full mx-auto space-y-[6vw]">
      <h3 className="font-medium lg:font-bold text-[6.5vw] md:text-[5vw] lg:text-[3vw] lg:tracking-tight lg:leading-[150%] leading-[160%] ">
        To this day, our focus on developing <span className="bg-primary text-background px-2">strong relationships</span> with <span className="bg-secondary text-background px-2">founders and managers</span> remains central to our success enabling us to adapt our proven model to the individual needs of each <span className="bg-foreground text-background px-2">portfolio company.</span>
      </h3>
    </div>
  );
}
