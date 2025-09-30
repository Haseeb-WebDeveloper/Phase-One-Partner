import FounderHeroSection from "@/components/pages/founder/founder-hero-section";
import BrandSection from "@/components/pages/founder/brand-section";
import FeaturesSection from "@/components/pages/founder/features-section";
import PhasesSection from "@/components/pages/founder/phases-section";
import CTASection from "@/components/pages/founder/cta-section";
import FAQSection from "@/components/pages/founder/faq-section";

export default function FounderPage() {
  return (
    <div>
      <FounderHeroSection />
      <BrandSection />
      <FeaturesSection />
      <PhasesSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}