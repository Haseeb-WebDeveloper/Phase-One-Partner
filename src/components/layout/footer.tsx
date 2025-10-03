"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] py-8 sm:py-12 lg:pt-24 mb-6 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Follow Us Section */}
          <div className="w-full lg:w-auto">
            <div className="text-[16px] sm:text-[12px] font-extrabold uppercase mb-2 flex gap-4 items-center">
              <p>FOLLOW US</p>
              <div className="flex gap-2 items-center">
                <Link href="#">
                  <Image
                    src="/logo/twitter.svg"
                    alt="twitter"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/logo/facebook.svg"
                    alt="facebook"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/logo/instagram.svg"
                    alt="instagram"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/logo/linkedin.svg"
                    alt="linkedin"
                    width={13}
                    height={13}
                    className="w-4 h-4 sm:w-[13px] sm:h-[13px]"
                  />
                </Link>
              </div>
            </div>
            <h3 className="text-[28px] sm:text-[24px] lg:text-[28px] font-inter font-bold text-primary mb-4">
              Stay in the Loop
            </h3>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-3 sm:px-4 py-2 text-[16px] border rounded-l-lg focus:outline-none flex-1 min-w-0"
              />
              <div className="cursor-pointer bg-primary rounded-r-lg px-4 py-3 flex items-center justify-center">
                <Image
                  src="/icons/right-long-arrow.svg"
                  alt="right arrow"
                  width={50}
                  height={50}
                  className="w-fit h-4"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto">
            {/* Phase One Partners */}
            <div>
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Phase One Partners
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    For Business Owners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    For Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Services
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Origination Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Transaction Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Buy & Build
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Explore
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-extrabold text-[16px] sm:text-[18px] lg:text-[28px] mb-4 sm:mb-6 lg:mb-8">
                Legal
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium hover:text-primary transition-colors block"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mb-8 sm:mb-12">
          <p className="italic text-sm sm:text-base font-inter mb-3 sm:mb-4 leading-relaxed">
            PhaseOne Partners provides origination and introduction services
            only. We work exclusively with wholesale investors, such as private
            equity funds, and our role is limited to facilitating connections
            with businesses.
          </p>
          <p className="italic text-sm sm:text-base font-inter leading-relaxed">
            We do not provide financial product advice, recommendations, or deal
            structuring services. All investment assessments and decisions are
            made independently by the fund, or manager.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 gap-2 sm:gap-0">
          <div className="text-[14px] sm:text-[16px] font-inter font-medium">
            © 2025 PhaseOne Partners. All Rights Reserved
          </div>
          <div className="text-[12px] sm:text-[16px] font-inter font-medium text-center sm:text-right">
            Website Designed & Built by LORE Marketing Agency
          </div>
        </div>
      </div>
    </footer>
  );
}
