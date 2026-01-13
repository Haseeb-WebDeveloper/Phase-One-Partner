import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Terms and Conditions - PhaseOne Partners",
  description: "Terms and Conditions for PhaseOne Partners Pty Ltd",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-background">
      <Navbar isLight={true} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0224e9] to-[#011483] min-h-[300px] lg:min-h-[400px] pt-[165px] lg:pt-[200px] pb-12 lg:pb-16">
        <div className="px-4 sm:px-6 lg:px-16 relative z-10 max-w-7xl mx-auto w-full text-center">
          <h1 className="font-manrope font-medium text-[32px] lg:text-[64px] leading-[42px] lg:leading-[74px] text-white uppercase mb-4 lg:mb-6">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-16 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 lg:space-y-8">
              {/* Company Info */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h2 className="font-manrope font-bold text-2xl lg:text-3xl text-[#333333] mb-4">
                  Phaseone Partners Pty Ltd
                </h2>
                <p className="font-inter text-base lg:text-lg text-[#333333] mb-2">
                  <strong>ABN:</strong> 97 679 376 464
                </p>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <p className="font-inter text-base lg:text-lg text-[#333333] leading-relaxed mb-6">
                  PhaseOne Partners Pty Ltd acts as a specialist consulting firm and does not offer financial advice. Information or materials provided are for general informational purposes only and should not be interpreted as financial advice under the Corporations Act 2001 (Cth). We encourage seeking independent financial, legal, or tax advice specific to your situation from a licensed professional.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm border border-gray-100">
                <h3 className="font-manrope font-semibold text-xl lg:text-2xl text-[#333333] mb-4">
                  PhaseOne Partners
                </h3>
                <div className="space-y-2 font-inter text-base lg:text-lg text-[#333333]">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:info@phaseonepartners.com.au" 
                      className="text-primary hover:underline"
                    >
                      info@phaseonepartners.com.au
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a 
                      href="tel:+61416825603" 
                      className="text-primary hover:underline"
                    >
                      +61 416 825 603
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a 
                      href="https://www.phaseonepartners.com.au" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.phaseonepartners.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

