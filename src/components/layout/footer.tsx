"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background max-w-[1600px] mx-auto px-6 lg:px-16 py-8">
      <div className="rounded-2xl border bg-foreground/10 text-foreground border-foreground/20">
        {/* Find Us Section */}
        <div className="mb-16 px-4 sm:px-8 md:px-12 pt-10">
          <h2 className="text-foreground text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Find Us
          </h2>

          {/* Main Content Grid */}
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16 lg:flex-row lg:justify-between">
            {/* Offices */}
            <div className="w-full lg:w-fit">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Offices
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-primary font-medium">UK</span>
                  <span className="text-foreground ml-2">
                    45 Mortimer Street, London W1W 8HJ
                  </span>
                </div>
                <div>
                  <span className="text-primary font-medium">US</span>
                  <span className="text-foreground ml-2">
                    445 Park Avenue, NY, 10022
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="w-full lg:w-fit">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Phone Numbers
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-primary font-medium">UK</span>
                  <span className="text-foreground ml-2">
                    +44 (0) 20 3475 7660
                  </span>
                </div>
                <div>
                  <span className="text-primary font-medium">US</span>
                  <span className="text-foreground ml-2">+1 212 302 2362</span>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="w-full lg:w-fit lg:pr-12">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Email Us
              </h3>
              <div>
                <span className="text-foreground break-all">
                  hello@synova.pe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-foreground/5 flex flex-col gap-2 sm:gap-0 lg:flex-row justify-between items-start lg:items-center p-4 border-t border-foreground/20">
          <div className="text-xs sm:text-sm mb-2 lg:mb-0">
            Synova LLP is authorised and regulated in the UK by the Financial
            Conduct Authority. Registered in England No. OC329299.
          </div>
          <div className="text-xs sm:text-sm">
            Website designed & Built by Wasif
          </div>
        </div>
      </div>
    </footer>
  );
}
