"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedButton from "@/components/ui/animated-button";

export default function ForFounders() {
  const faqItems = [
    {
      question: "How do I determine my target audience?",
      answer:
        "We work with you to analyze your existing customer base, market research, and business goals to identify your ideal target audience. This includes demographic analysis, psychographic profiling, and understanding your value proposition.",
    },
    {
      question: "How much does social media advertising cost?",
      answer: "",
    },
    {
      question: "What social media ad packages do you offer?",
      answer: "",
    },
    {
      question: "How do I measure ROI on social media ads?",
      answer: "",
    },
    {
      question:
        "What's the difference between social media marketing and paid ads?",
      answer: "",
    },
    {
      question:
        "What's the difference between a boosted post and an ad on Facebook?",
      answer: "",
    },
  ];

  const advantages = [
    {
      title: "Direct Access to Investors",
      description:
        "We connect you straight to vetted private equity funds and strategic buyers already investing in your industry. No broad auctions, no wasted time.",
      imageUrl: "/icons/database.svg", // Placeholder for icon
    },
    {
      title: "Fast, Clean Process",
      description:
        "Pre-qualified investors mean fewer distractions, no wasted presentations, and more time spent on serious opportunities.",
      imageUrl: "/icons/fast.svg", // Placeholder for icon
    },
    {
      title: "Confidential and Targeted Access",
      description:
        "Your reputation matters. We approach select aligned investors who want to speak with you directly, keeping the process discreet.",
      imageUrl: "/icons/target.svg", // Placeholder for icon
    },
    {
      title: "Aligned Incentives",
      description:
        "We are paid by investors, not by pushing deals. Our goal is finding the right long-term match for your business.",
      imageUrl: "/icons/money.svg", // Placeholder for icon
    },
    {
      title: "Relationships, Not Transactions",
      description:
        "We prioritise early, genuine conversations so you can assess cultural fit and alignment before formal discussions begin.",
      imageUrl: "/icons/relationship.svg", // Placeholder for icon
    },
    {
      title: "Protecting Your Legacy",
      description:
        "We help match you with investors who share your vision and will look after your employees, customers, and the culture you've built.",
      imageUrl: "/icons/protection.svg", // Placeholder for icon
    },
  ];

  const phases = [
    {
      number: "01.",
      title: "Initial Exploration & Planning",
      description:
        "We meet to discuss your goals, review financials, and understand your business. Confidentiality agreements protect your information from the start.",
      duration: "2–4 weeks",
    },
    {
      number: "02.",
      title: "Early Investor Engagement",
      description:
        "We introduce you to carefully selected investors who have expressed genuine interest in your industry and business model. These are pre-qualified opportunities, not cold calls.",
      duration: "2–4 weeks",
    },
    {
      number: "03.",
      title: "Indicative Offers / LOIs",
      description:
        "Interested investors provide initial offers and letters of intent. We help you evaluate these proposals, comparing terms, valuation, and strategic fit for your business.",
      duration: "2–4 weeks",
    },
    {
      number: "04.",
      title: "Due Diligence",
      description:
        "Selected investors conduct thorough due diligence. We coordinate the process, ensuring all necessary documentation is prepared and questions are answered efficiently.",
      duration: "2–4 weeks",
    },
    {
      number: "05.",
      title: "Final Negotiation & Signing",
      description:
        "We facilitate final negotiations on terms, valuation, and deal structure. Once agreed, legal documents are prepared and the transaction is finalized with proper documentation.",
      duration: "2–4 weeks",
    },
    {
      number: "06.",
      title: "Completion & Transition",
      description:
        "The deal closes and ownership transitions. We support the handover process, ensuring a smooth transition for your team, customers, and operations.",
      //   duration: "1-2 Weeks",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[478px] lg:min-h-[976px] pt-[165px] lg:pt-[266.7px]">
        {/* Background decorative elements Image */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none hidden lg:block">
          <Image
            src="/bg/partners-for-growth-hero-bg.png"
            alt="Partners for Growth Hero Background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-2 lg:mb-4">
            Partners FOR <span className="text-[#0085F2]">GROWTH</span>
          </h1>
          <p className="font-inter text-[16px] lg:text-[28px] text-white mb-4 lg:mb-8 max-w-[400px] lg:max-w-none mx-auto">
            Helping entrepreneurs achieve their vision.
          </p>
          <div className="w-fit mx-auto">
            <AnimatedButton
              text="Book a Free Discovery Session Today"
              variant="inverse"
            />
          </div>
        </div>

        {/* Image Gallery - Grid Layout */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full mt-12 lg:mt-8 overflow-x-visible">
          <div className="flex gap-2 lg:gap-6 w-full justify-between px-4 lg:px-16">
            {/* 1st column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/founder/1.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/founder/2.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* 2nd column  */}
            <div className="flex flex-col item-center justify-end w-[40%]">
              <div
                className="w-full h-[80%] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/founder/3.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* 3rd column  */}
            <div className="flex flex-col gap-2 lg:gap-6 w-[30%]">
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/founder/4.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="w-full h-[72px] md:h-[236px] md:rounded-t-[12px] rounded-t-[6px]"
                style={{
                  backgroundImage: "url('/founder/5.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* absolute poition left right images */}
            <div className="absolute top-1/2 -translate-y-1/2 md:left-[-270px] left-[-295px]">
              <div
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/founder/0.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 md:right-[-270px] right-[-295px]">
              <div
                className="w-[300px] h-[72px] md:h-[236px] md:rounded-[12px] rounded-[6px]"
                style={{
                  backgroundImage: "url('/founder/5.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 lg:py-24 mt-12 lg:mt-20 px-[15px] lg:px-[70px] bg-background">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-[60px]">
            <div className="space-y-5 lg:space-y-[40px]">
              <div className="space-y-4 lg:space-y-[30px]">
                <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide leading-[14px]">
                  What we do
                </p>
                <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                  We connect you with{" "}
                  <span className="text-[#0224e9]">opportunities</span> that
                  others never see.
                </h2>
                <p className="font-inter font-medium text-[16px] lg:text-[28px] text-black leading-[26px] lg:leading-[36px] max-w-[399px] lg:max-w-[618px]">
                  Selling a business can feel overwhelming, but you don't need
                  to go through it alone.
                </p>
              </div>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px] max-w-[389px] lg:max-w-none">
                With PhaseOne, every stage is structured, managed, & supported,
                so you can focus on running your business while we handle the
                complexities.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#0224e9] text-white hover:bg-[#0224e9]/90 rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium capitalize">
                Learn how we help
              </Button>
            </div>
          </div>
          <div className="relative  z-10 h-[431px] lg:h-full w-full rounded-[12px] overflow-hidden">
            <Image
              src="/founder/2nd-section.png"
              alt="Partners for Growth Hero Image"
              width={504}
              height={543}
              className="w-full h-full object-cover"
            />
          </div>
          {/* rihgt side absolute position image */}
          <div className="absolute md:-top-32 -right-36 bottom-0 md:bottom-auto z-0">
            <Image
              src="/bg/partners-for-growth-2nd-section-bg.png"
              alt="Partners for Growth Hero Image"
              width={504}
              height={543}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16 space-y-5 lg:space-y-[40px]">
            <div className="space-y-4 lg:space-y-2">
              <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide">
                Benefits
              </p>
              <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                Our Key <span className="text-[#0224e9]">Advantages</span>
              </h2>
              <p className="font-inter text-[14px] lg:text-[18px] text-[#333333] max-w-[299px] lg:max-w-[516px] mx-auto leading-[24px] lg:leading-[28px] mt-4 lg:mt-6">
                Key advantages that make a difference when expanding, growing,
                or exiting your company
              </p>
            </div>
          </div>

          {/* Mobile: Benefits Card */}
          <div className="max-w-4xl mx-auto lg:hidden">
            <div className="bg-background z-10 flex flex-col p-8 border-2 border-[#0224e9] rounded-[32px] font-manrope shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0224e9] mb-2">
                  Our Key Advantages
                </h3>
                <p className="text-sm text-black uppercase font-semibold tracking-wide">
                  Benefits That Make a Difference
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <p className="text-foreground leading-relaxed mb-6 text-base font-manrope font-medium">
                  Key advantages that make a difference when expanding, growing,
                  or exiting your company.
                </p>

                <ul className="space-y-4 text-foreground">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-[35px] h-[35px] rounded flex-shrink-0 mt-1">
                          <Image
                            src={advantage.imageUrl}
                            alt={advantage.title}
                            width={35}
                            height={35}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-manrope font-semibold text-[16px] text-black mb-2">
                            {advantage.title}
                          </h4>
                          <p className="font-inter text-[14px] text-[#333333] leading-[24px]">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center mt-auto">
                <Button className="bg-[#0224e9] text-white hover:bg-[#0224e9]/90 rounded-full px-[22px] py-[10px] h-[44px] text-[12px] font-manrope font-medium">
                  Learn About Our Process
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => {
              const isLastColumn = (index + 1) % 3 === 0;
              const isLastRow = index >= 3;
              return (
                <div
                  key={index}
                  className={`p-8 flex flex-col space-y-4 ${
                    !isLastColumn ? "border-r" : ""
                  } ${!isLastRow ? "border-b" : ""}`}
                  style={{
                    borderColor: "#0000000D",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                >
                  <div className="w-[60px] h-[60px] flex-shrink-0">
                    <Image
                      src={advantage.imageUrl}
                      alt={advantage.title}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-manrope font-semibold text-[20px] text-black">
                    {advantage.title}
                  </h4>
                  <p className="font-inter text-[16px] text-[#333333] leading-[26px]">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Phase of Doing a Deal Section */}
      <section className="relative py-12 lg:py-20 px-[15px] lg:px-[70px] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-10 lg:space-y-[60px]">
            <div className="space-y-5 lg:space-y-[30px]">
              <p className="font-manrope text-[#0224e9] text-[14px] uppercase tracking-wide">
                The Phase of Doing a Deal
              </p>
              <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
                From the First Call to Beyond the Signed {""}
                <span className="text-[#0224e9]">Agreement</span>
              </h2>
              <p className="font-inter text-[14px] lg:text-[18px] text-black leading-[24px] lg:leading-[28px]">
                There are 6 simple phases of selling your business or raising
                capital and we handle them all.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button className="bg-[#0224e9] text-white hover:bg-[#0224e9]/90 rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium">
                Get Started Today
              </Button>
            </div>
          </div>

          {/* Phases Accordion */}
          <div className="relative">
            <Accordion type="single" collapsible className="w-full z-10">
              {phases.map((phase, index) => (
                <AccordionItem
                  key={index}
                  value={`phase-${index}`}
                  className="border-b border-[#333333]/20"
                >
                  <AccordionTrigger className="hover:no-underline py-4 lg:py-6 cursor-pointer">
                    <div className="flex flex-col items-start w-full pr-4">
                      <div className="flex items-center gap-3 lg:gap-4 flex-1">
                        <h3 className="font-inter font-medium text-[16px] lg:text-[28px] text-[#333333] leading-[40.8px] text-left">
                          <span className="font-inter font-bold text-[#0224e9]">
                            {phase.number}
                          </span>{" "}
                          {phase.title}
                        </h3>
                      </div>
                      {phase.duration && (
                        <p className="font-manrope font-semibold text-[#0224e9] text-[12px] leading-[12px] whitespace-nowrap mt-[4px] lg:mt-[8px]">
                          {phase.duration}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-[14px] lg:text-[18px] text-[rgba(51,51,51,0.8)] leading-[22px] lg:leading-[28px] pb-4 lg:pb-6 mt-[-6px]">
                    {phase.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Fix: Make overlay image ignore pointer events so accordion is clickable */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] z-[0] pointer-events-none">
              <Image
                src="/bg/partners-for-growth-3nd-section.png"
                alt="Partners for Growth 15-Minute Conversation Background"
                width={584}
                height={730}
                className="w-fit h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Page Break Line */}
      <div className="w-full px-4 lg:px-16 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0224e9] to-transparent opacity-50 blur-[1px]"></div>
        </div>
      </div>

      {/* 15-Minute Conversation CTA Section */}
      <section className="relative py-12 lg:py-20 px-4 lg:px-16">
        <div className="max-w-[400px] lg:max-w-[1300px] mx-auto bg-gradient-to-b from-[#0224e9] to-[#011483] rounded-[9.846px] lg:rounded-[32px] p-8 lg:p-20 text-center relative overflow-hidden min-h-[351px] lg:min-h-[567px] flex items-center justify-center">
          {/* Background decorative elements */}
          <div className="absolute -left-20 lg:left-0 -bottom-8 lg:bottom-0">
            {/* 
              Changed -left-8 -> -left-20 on mobile to move it further left,
              but kept on desktop (lg:left-0) for original placement.
            */}
            <Image
              src="/bg/partners-for-growth-get-started-desktop.png"
              alt="Partners for Growth 15-Minute Conversation Background"
              width={584}
              height={730}
              className="w-fit h-[200px] lg:h-[280px] object-cover opacity-80 lg:opacity-100"
            />
          </div>
          <div className="absolute -right-8 -top-8 lg:right-0 lg:top-0">
            <Image
              src="/bg/partners-for-growth-get-started-2-desktop.png"
              alt="Partners for Growth 15-Minute Conversation Background"
              width={584}
              height={730}
              className="w-fit h-[200px] lg:h-[300px] object-cover opacity-80 lg:opacity-100"
            />
          </div>

          <div className="relative z-10 space-y-4 lg:space-y-6">
            <p className="font-manrope text-white text-[10px] lg:text-[16px] uppercase tracking-wide">
              Next Step
            </p>
            <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-white">
              <span className="block">15-Minute</span>
              <span className="block">Conversation</span>
            </h2>
            <p className="font-inter text-[16px] lg:text-[18px] text-white leading-[26px] lg:leading-[28px] max-w-[359px] lg:max-w-[636px] mx-auto">
              We'll explain exactly why this investor developed conviction about
              your space. You'll know immediately if it's worth exploring.
            </p>
            {/* Center button on all breakpoints */}
            <div className="flex justify-center">
              <Button className="bg-white text-[#0224e9] hover:bg-white/90 rounded-full px-[22px] py-[10px] h-[44px] lg:h-[48px] text-[12px] lg:text-[18px] font-manrope font-medium">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 lg:py-20 px-[15px] lg:px-[150px] bg-white">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[40vw] h-[40vw] z-0">
          <Image
            src="/2nd-section-bg.png"
            alt="bg"
            width={1000}
            height={1000}
            className="object-cover opacity-50 -scale-x-100"
          />
        </div>
        <div className="max-w-[400px] lg:max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12 space-y-4 lg:space-y-6">
            <p className="font-manrope text-[#0224e9] text-[14px] lg:text-[16px] uppercase tracking-wide">
              FAQ
            </p>
            <h2 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[70px] text-black">
              Still Got <span className="text-[#0224e9]">Questions</span>
            </h2>
            <p className="font-inter text-[14px] lg:text-[18px] text-[#333333] max-w-[371px] lg:max-w-[870px] mx-auto leading-[24px] lg:leading-[28px]">
              Explore answers to frequently asked questions about how we support
              founders in growing, scaling, and achieving their business goals.
            </p>
          </div>

          <div className="max-w-[400px] lg:max-w-[1140px] mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#333333]/20"
                >
                  <AccordionTrigger className="font-inter font-medium text-[14px] lg:text-[26px] text-[#333333] text-left hover:no-underline py-4 lg:py-6 cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-[14px] lg:text-[18px] text-[#333333] leading-[24px] lg:leading-[28px] pb-4 lg:pb-6">
                    {item.answer || "Answer coming soon..."}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
