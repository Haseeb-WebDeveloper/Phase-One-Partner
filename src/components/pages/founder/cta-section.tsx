"use client";

import AnimatedButton from "@/components/ui/animated-button";

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Next Step Label */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="bg-muted/50 border border-border/50 rounded-full px-6 py-2">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Next Step
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            <span className="block">15-Minute</span>
            <span className="block text-primary italic font-normal">Conversation</span>
          </h2>
        </div>

        {/* Descriptive Paragraph */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We'll explain exactly why this capital partner developed conviction about your space. 
            You'll know immediately if it's worth exploring.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <AnimatedButton text="Schedule Call →" />
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
