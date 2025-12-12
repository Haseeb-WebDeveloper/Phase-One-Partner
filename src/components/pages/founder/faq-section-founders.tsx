"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export default function FAQSectionFounders() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Who are you, and what do you do?",
      answer: "PhaseOne Partners is a specialist, proprietary deal origination firm dedicated to helping founders and business owners connect with likeminded institutional investors, including private equity firms, family offices, and corporate investors. We are reaching out because your business was identified through detailed market research as having the specific characteristics our investment partner is seeking, such as a strong market position, growth trajectory, or unique capabilities. The fact that you haven't marketed your business is exactly the point: the best strategic partnerships often form before a formal sale process begins. We are seeking to explore mutual interest in a strategic partnership, not pressure you into a transaction. Many successful business owners are open to discussing growth capital, succession planning, or partnering with investors who can accelerate their vision. This is a confidential, no-pressure conversation to explore strategic fit."
    },
    {
      id: 2,
      question: "How is this different from when investment bankers, M&A advisors or business brokers have approached me in the past?",
      answer: "The key difference is representation: Traditional advisors and brokers represent sellers; we represent the buyer. Advisors and brokers: They are hired by you, the seller, to run a competitive auction process, maximize price, and charge you a fee (typically 3 and up to 10% of the transaction value). PhaseOne Partners: We are paid by the investment partner (the buyer). We are not trying to sell your business for you. We explore whether your business is a strategic fit for our client and help connect you with the people who understand your industry, and are aligned with your vision. This means: 1. No auction pressure: We offer exploratory, relationship-driven conversations, not a competitive auction process. 2. Proprietary relationship: You engage with a serious, committed investment partner, which often leads to smoother transactions and better strategic alignment than competitive processes. 3. No advisory fees from you: You explore the opportunity on your terms, free of any fee pressure."
    },
    {
      id: 3,
      question: "What information do you need from me, and how do you ensure confidentiality? I don't want my competitors, customers, or employees finding out.",
      answer: "Confidentiality is paramount. Our initial conversation requires minimal information—just a high-level overview of your market position and growth trends. We don't put your business on a website, or advertise it broadly. We maintain confidentiality and through the entire process. If there is mutual interest, we immediately establish formal confidentiality agreements (NDAs) before any sensitive information is exchanged. Detailed information, such as financial performance or customer concentration, is only shared after NDAs are in place and mutual interest is established. We protect confidentiality through signed NDAs, limited sharing of information only with the core deal team, and secure data rooms. You control the pace of information disclosure."
    },
    {
      id: 4,
      question: "What happens if we explore this and I decide it's not the right fit?",
      answer: "If you decide the fit is not right, we will respect that decision completely and immediately. We only connect you with institutional investors who are actively interested in investing in your industry, and do not advertise businesses for sale, but understand that sometimes things change. All conversations are kept confidential, and any information shared remains as such. Many business owners find they benefit from the strategic market insights gained, even without a transaction. If you are open to a confidential conversation to learn more about our partner's investment approach and explore alignment, we would welcome the opportunity."
    }
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-muted/50 border border-border/50 rounded-full px-6 py-2">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                FAQ
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Still Got Questions?
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, 2).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between py-6 hover:bg-muted/30 transition-all duration-200 rounded-lg px-4 -mx-4 border-b border-border/50 last:border-b-0 text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="pb-6 animate-in slide-in-from-top-2 duration-200 w-full">
                    <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(2, 4).map((faq) => (
              <div key={faq.id} className="group flex flex-col items-center lg:items-start">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-center lg:justify-between py-6 hover:bg-muted/30 transition-all duration-200 rounded-lg px-4 -mx-4 border-b border-border/50 last:border-b-0 text-center lg:text-left"
                >
                  <h3 className="font-semibold text-foreground text-base md:text-lg pr-4 w-full text-center lg:text-left">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-muted-foreground transition-all duration-200 group-hover:text-primary flex-shrink-0 ${
                      expandedFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedFAQ === faq.id && (
                  <div className="pb-6 animate-in slide-in-from-top-2 duration-200 w-full">
                    <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}

