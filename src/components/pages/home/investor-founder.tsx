"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const sectionData = [
  {
    title: "Founders",
    subtitle: "A Smarter Way to Sell Your Business",
    description:
      "We don’t just list your company and hope the right buyer comes along. We work with you to position the opportunity, find aligned investors, and manage the process all the way through.",
    features: [
      "Direct access to trusted investors",
      "End-to-end support",
      "Strategic preparation to frames your business correctly",
      "Respect for your timeline, privacy, and exit goals",
    ],
    buttonText: "Learn About Our Process",
  },
  {
    title: "Investors",
    subtitle: "High-Quality Deals, Curated to Your Portfolio",
    description:
      "We bring you deals that are aligned with your investment. Each one is pre-qualified, prepared, and ready to progress.",
    features: [
      "Targeted introductions based on sector, strategy, and scale",
      "Pre-vetted opportunities with founder buy-in",
      "Thoughtful presentation — no generic IMs",
    ],
    buttonText: "View Our Approach",
  },
];

export default function InvestorFounder() {
  return (
    <section className="w-full pt-24 lg:pt-32 pb-12 bg-white z-20 rounded-t-4xl -mt-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center font-manrope">
          <div className="mb-8">
            <p className="tracking-wider text-primary uppercase font-light mb-4">
              Deal Origination
            </p>
            {/* Desktop */}
            <div className="hidden lg:block">
              <h4 className="text-3xl lg:text-4xl xl:text-[62px] max-w-4xl mx-auto font-extrabold text-[#333333]">
                What Does Deal
              </h4>
              <div className="relative flex gap-3 w-fit text-3xl lg:text-4xl xl:text-[62px] max-w-4xl mx-auto font-extrabold text-[#333333]">
                <p>Origination</p>
                <p className="bg-[#c0c8f9] rounded-l-lg px-2 border-r-5 border-primary">
                  Mean for You
                </p>
                <Image
                  src="/logo-tip.svg"
                  alt="arrow-right"
                  width={400}
                  height={400}
                  className="absolute -right-[6.5rem] -top-[2rem] w-fit h-8"
                  priority
                  quality={100}
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden space-y-1.5">
              <h4 className="text-4xl max-w-4xl mx-auto font-extrabold text-[#333333] leading-[120%]">
                What Does Deal Origination
              </h4>
              <div className="relative mt-1 flex gap-3 w-fit text-4xl max-w-4xl mx-auto font-extrabold text-[#333333]">
                <p className="bg-[#c0c8f9] rounded-l-lg px-2 border-r-5 border-primary leading-[120%]">
                  Mean for You
                </p>
                <Image
                  src="/logo-tip.svg"
                  alt="arrow-right"
                  width={400}
                  height={400}
                  className="absolute -right-[3.96rem] -top-[1.19rem] w-fit h-5"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>

          <p className="text-xl lg:text-[25px] text-[#333333] font-poppins max-w-6xl mx-auto leading-relaxed text-pretty">
            Whether you're preparing to exit or searching for your next
            investment, deal origination is the service that connects
            high-quality businesses with aligned investors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative pt-16">
          {sectionData.map((section, index) => (
            <div
              key={index}
              className={`bg-background z-10 flex flex-col p-10 lg:p-12 border-2 border-primary rounded-4xl font-manrope`}
            >
              <div className="z-10">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-[34px] font-extrabold text-primary mb-2">
                    For {section.title}
                  </h2>
                  <p className="text-lg text-black uppercase font-semibold tracking-wide">
                    {section.subtitle}
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <p className="text-foreground leading-relaxed mb-6 text-lg font-manrope font-medium">
                    {section.description}
                  </p>

                  <ul
                    className={`space-y-3 text-foreground ${
                      index === 0 ? "" : "lg:pt-12"
                    }`}
                  >
                    {section.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex text-xl lg:font-extrabold font-semibold"
                      >
                        <span className="mr-3 text-2xl">•</span>
                        <span className="text-[#333333] ">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button className="py-6 w-fit mx-auto px-12 rounded-full text-background border-border transition-all duration-200 mt-auto text-lg font-medium font-lato">
                {section.buttonText}
              </Button>
            </div>
          ))}
          <div className="absolute -top-16 -left-12 w-full h-full z-0">
            <Image
              src="/2nd-section-bg.png"
              alt="bg"
              width={1000}
              height={1000}
              className="object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
