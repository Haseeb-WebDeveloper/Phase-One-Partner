"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="pb-32 pt-12 max-w-[1400px] mx-auto px-6 lg:px-16 w-full space-y-[6vw]">
      <h3 className="text-center font-inter tracking-wide text-pretty font-bold text-[20px] md:text-3xl lg:text-[40px] lg:tracking-tight lg:leading-[150%] leading-[160%] ">
        To this day, our focus on developing <span className="text-primary">strong relationships</span> with <span className="text-primary">founders and managers</span> remains central to our success enabling us to adapt our proven model to the individual needs of each <span className="text-primary">portfolio company.</span>
      </h3>
    </div>
  );
}
