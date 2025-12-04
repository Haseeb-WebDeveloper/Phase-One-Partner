import ContactHeroSection from "@/components/pages/contact/hero-section";
import ContactFormSection from "@/components/pages/contact/contact-form-section";
import Navbar from "@/components/layout/navbar";

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
}

