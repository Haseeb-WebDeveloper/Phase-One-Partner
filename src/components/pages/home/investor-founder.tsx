"use client";
import { Button } from "@/components/ui/button";

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
    <section className="w-full pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            What Does Deal Origination Mean for You?
          </h1>
          <p className="text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Whether you're preparing to exit or searching for your next
            investment, deal origination is the service that connects
            high-quality businesses with aligned investors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectionData.map((section, index) => (
            <div key={index} className=" bg-foreground/5 flex flex-col px-8 py-6">
              <div className="">
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    For {section.title}
                  </h2>
                  <p className="text-base text-foreground uppercase tracking-wide font-medium">
                    {section.subtitle}
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <p className="text-foreground leading-relaxed mb-6 text-lg">
                    {section.description}
                  </p>

                  <ul className="space-y-3 text-foreground">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex text-lg">
                        <span className="text-foreground mr-3 text-2xl">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button className="py-6 rounded-full text-background border-border transition-all duration-200 mt-auto">
                {section.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
