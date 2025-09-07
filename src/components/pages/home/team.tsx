import AnimatedButton from "@/components/ui/animated-button";

const Team = () => {
  const comparisonData = [
    {
      feature: "Direct access to Investors",
      phaseOne: "Direct introductions to a small set of aligned, serious PE funds",
      traditional: "Broad auction to the highest bidder, often prioritising price over fit"
    },
    {
      feature: "Confidentiality",
      phaseOne: "Discreet, targeted outreach that protects your reputation and staff",
      traditional: "Widely marketed process with little control over who sees your information"
    },
    {
      feature: "Control of Process",
      phaseOne: "Founder-led pace - you choose when and with whom to engage",
      traditional: "Broker-driven timelines designed to maximise speed and fees"
    },
    {
      feature: "Legacy & Culture",
      phaseOne: "Focus on finding investors who respect your people and vision",
      traditional: "Legacy and culture often secondary to transaction value"
    },
    {
      feature: "Relationship Building",
      phaseOne: "Early, trust-based conversations before formal negotiations",
      traditional: "Transaction-first approach with limited personal connection"
    },
    {
      feature: "Process Efficiency",
      phaseOne: "Pre-qualified investors mean fewer wasted conversations",
      traditional: "Many exploratory calls with investors who may not be a fit"
    },
    {
      feature: "Incentives",
      phaseOne: "Paid for by the investors - no success fees, no pressure to transact",
      traditional: "Success fees drive pressure to close, even if not the best fit"
    }
  ];

  return (
    <section className="py-24 md:py-36 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Why Deal Origination?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            A side-by-side comparison of how we work differently to traditional brokers and in-house sourcing teams.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-foreground/20 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-4 md:p-6 text-lg font-semibold text-background bg-primary/80 border-r border-background">
              What Matters to Business Owners
            </div>
            <div className="p-4 md:p-6 text-lg font-semibold text-background bg-primary/80 border-r border-background">
              PhaseOne Partners
            </div>
            <div className="p-4 md:p-6 text-lg font-semibold text-background bg-primary/80">
              Traditional Brokers/Advisors
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-foreground/20">
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 hover:bg-foreground/5 transition-colors">
                {/* Feature Name */}
                <div className="p-4 md:px-6 py-4 bg-foreground/5 flex items-center font-medium text-foreground border-r border-foreground/20">
                  {row.feature}
                </div>
                
                {/* PhaseOne Partners */}
                <div className="p-4 md:px-6 py-4 text-foreground border-r border-foreground/20">
                  {row.phaseOne}
                </div>
                
                {/* Traditional Brokers/Advisors */}
                <div className="p-4 md:px-6 py-4 text-foreground">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col justify-center w-fit mx-auto items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Next Steps</h3>
          <p className="text-lg mb-6">It all starts with one simple call.</p>
          <AnimatedButton
            text="Schedule Discovery Call"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;