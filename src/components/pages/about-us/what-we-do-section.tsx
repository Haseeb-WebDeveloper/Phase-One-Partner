export default function WhatWeDoSection() {
  const services = [
    {
      title: "Deal Origination",
      description:
        "Sourcing and qualifying high-potential on- and off-market opportunities.",
    },
    {
      title: "Industry and Niche Research",
      description:
        "In-depth market mapping and analysis where value is emerging.",
    },
    {
      title: "Transaction Support",
      description:
        "Managing stakeholder engagement and deal progression with diligence, discretion, and expertise.",
    },
    {
      title: "Buy and Build",
      description:
        "Enhancing platform strategies through add-on sourcing, integration planning, and ongoing support.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-muted/30 border-t border-b border-[#0224E9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[400px]">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-5 lg:space-y-6 h-full">
          <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px]">
            <span className="text-foreground">What</span>{" "}
            <span className="text-[#0224e9]">We Do</span>
          </h2>
          <p className="font-inter text-[14px] lg:text-[18px] text-foreground/80 leading-[24px] lg:leading-[28px]">
            We design origination programs that extend reach and sharpen focus
            for investors, while guiding founders through every stage of
            engagement.
          </p>
        </div>

        {/* Right Column - Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div key={index}>
              <div className="py-6 lg:py-8">
                <div className="flex items-start gap-4">
                  <span className="text-[#0224e9] text-2xl lg:text-3xl font-bold leading-none mt-1">
                    +
                  </span>
                  <div className="flex-1">
                    <h3 className="font-manrope font-medium text-[18px] lg:text-[24px] text-foreground mb-2 lg:mb-3">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[14px] lg:text-[16px] text-foreground/70 leading-[22px] lg:leading-[24px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < services.length - 1 && (
                <div className="border-t #33333333 opacity-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

