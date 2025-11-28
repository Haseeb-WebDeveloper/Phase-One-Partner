"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Users,
  Rocket,
  Layers,
  FileText,
  BookOpen,
  Search,
  BarChart2,
  Target,
  TrendingUp,
  Zap,
  Monitor,
  Globe,
  Edit3,
  Database,
  Heart,
  Award,
  ThumbsUp,
  Shield,
} from "lucide-react";
import { HamburgerIcon } from "@/components/ui/hamburger-icon";

// Type definitions
interface SubMenuItem {
  name: string;
  href: string;
  icon: any;
  description: string;
}

interface DropdownItem {
  name: string;
  href: string;
  icon: any;
  description: string;
  submenu?: SubMenuItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  icon?: any;
  description?: string;
  dropdown?: DropdownItem[];
}

const navigation: NavigationItem[] = [
  { name: "For Founders", href: "/for-founders" },
  { name: "For Investors", href: "/for-investors" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      {
        name: "Origination Services",
        href: "/services/origination-services",
        icon: Search,
        description: "Identifying and sourcing high-potential deals.",
        submenu: [
          {
            name: "Deal Sourcing",
            href: "/services/deal-sourcing",
            icon: BarChart2,
            description: "Finding the right investment opportunities.",
          },
          {
            name: "Marketing Mapping",
            href: "/services/marketing-mapping",
            icon: Globe,
            description: "Mapping and analyzing market opportunities.",
          },
          {
            name: "Business Outreach",
            href: "/services/business-outreach",
            icon: Users,
            description: "Connecting with key business stakeholders.",
          },
        ],
      },
      {
        name: "Transaction Support",
        href: "/services/transaction-support",
        icon: FileText,
        description: "Guidance and support throughout transactions.",
        submenu: [
          {
            name: "Due Diligence",
            href: "/services/due-diligence",
            icon: Search,
            description: "Comprehensive due diligence for investments.",
          },
          {
            name: "Stakeholder Engagement",
            href: "/services/stakeholder-engagement",
            icon: Heart,
            description: "Engaging and managing stakeholders effectively.",
          },
          {
            name: "Valuation",
            href: "/services/valuation",
            icon: TrendingUp,
            description: "Accurate business and asset valuation services.",
          },
          {
            name: "Post Acquisition Planning",
            href: "/services/post-acquisition-planning",
            icon: Edit3,
            description: "Strategic planning after acquisition.",
          },
        ],
      },
      {
        name: "Buy & Build",
        href: "/services/buy-and-build",
        icon: Database,
        description: "Growth through acquisition and integration.",
        submenu: [
          {
            name: "Platform Identification",
            href: "/services/platform-identification",
            icon: Monitor,
            description: "Identifying scalable platform businesses.",
          },
          {
            name: "Target Sourcing",
            href: "/services/target-sourcing",
            icon: Target,
            description: "Finding and evaluating acquisition targets.",
          },
          {
            name: "Growth Roadmaps",
            href: "/services/growth-roadmaps",
            icon: TrendingUp,
            description: "Strategic roadmaps for business growth.",
          },
        ],
      },
    ],
  },
  {
    name: "Explore",
    href: "#",
    dropdown: [
      {
        name: "About",
        href: "/about-us",
        icon: BookOpen,
        description: "Learn more about PhaseOne Partners.",
      },
      {
        name: "Grow Your Business",
        href: "/grow-your-business",
        icon: Zap,
        description: "Accelerate your business growth with us.",
      },
      {
        name: "Portfolio",
        href: "/portfolio",
        icon: Award,
        description: "See our track record and portfolio companies.",
      },
      {
        name: "Insights",
        href: "/insights",
        icon: FileText,
        description: "Latest news, articles, and industry insights.",
      },
      {
        name: "Terms and Conditions",
        href: "/terms-and-conditions",
        icon: Edit3,
        description: "Read our terms and conditions.",
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
        icon: Shield,
        description: "Understand how we protect your data.",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: ThumbsUp,
    description: "Get in touch with our team.",
  },
];

export default function Navbar({ isLight }: { isLight?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Function to calculate total items including submenus
  const calculateTotalItems = (dropdown: DropdownItem[]) => {
    return dropdown.reduce((total, item) => {
      return total + 1 + (item.submenu ? item.submenu.length : 0);
    }, 0);
  };

  // Function to calculate dynamic grid layout
  const calculateGridLayout = (items: number) => {
    if (items <= 3) {
      return "grid-cols-1";
    } else if (items <= 6) {
      return "grid-cols-2";
    } else if (items <= 12) {
      return "grid-cols-3";
    }
    return "grid-cols-3";
  };

  // Function to calculate dropdown width
  const calculateDropdownWidth = (items: number) => {
    if (items <= 3) {
      return "min-w-[300px]";
    } else if (items <= 6) {
      return "min-w-[600px]";
    } else if (items <= 12) {
      return "min-w-[800px]";
    }
    return "min-w-[1000px]";
  };

  return (
    <header
      className={`absolute text-foreground top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "" : ""
      }`}
    >
      {/* Blue background for desktop */}
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative">
        <nav
          className={`${
            scrolled ? "" : ""
          } py-4 lg:px-2 rounded-lg transition-all duration-300`}
          aria-label="Global"
        >
          {/* Desktop: White rounded navbar */}
          <div className="hidden lg:flex items-center justify-between bg-white px-2 py-2 rounded-xl shadow-sm">
            {/* Logo */}
            <div className="flex flex-shrink-0 ">
              <Link href="/" className="ml-1.5 flex items-center">
                <Image
                  src="/icons/logo 1.svg"
                  alt="PhaseOne Partners Logo"
                  width={164}
                  height={39}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="flex gap-x-8 font-poppins">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 text-[14px] text-[#333333] leading-6 cursor-pointer">
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 text-[#333333] transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Invisible bridge to maintain hover state */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2  right-0 top-full h-8 ${calculateDropdownWidth(
                          calculateTotalItems(item.dropdown)
                        )} ${
                          activeDropdown === item.name ? "block" : "hidden"
                        }`}
                      />

                      {/* Multi-level Dropdown Menu */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-10 mt-4 w-full ${calculateDropdownWidth(
                          calculateTotalItems(item.dropdown)
                        )} rounded-lg bg-background px-6 py-4 shadow-2xl ring-1 transition-all duration-300 origin-top-left 
                                            ${
                                              activeDropdown === item.name
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-95 pointer-events-none"
                                            }`}
                      >
                        <div className="relative">
                          <div
                            className={`grid ${calculateGridLayout(
                              calculateTotalItems(item.dropdown)
                            )} z-[100] w-full`}
                          >
                            {item.dropdown.map((subItem, index) => (
                              <div key={subItem.name} className="space-y-1">
                                {/* Main submenu item */}
                                <Link
                                  href={subItem.href}
                                  target={
                                    subItem.name == "Careers"
                                      ? "_blank"
                                      : "_self"
                                  }
                                  className="group hover:bg-foreground/5 p-3 w-full flex items-center gap-3  transition-colors"
                                >
                                  <span className="text-xl text-primary">
                                    <subItem.icon className="w-6 h-6" />
                                  </span>
                                  <div className="flex flex-col">
                                    <span className="text-[16px] text-foreground font-bold underline">
                                      {subItem.name}
                                    </span>
                                  </div>
                                </Link>

                                {/* Further submenu items */}
                                {subItem.submenu && (
                                  <div className="space-y-1">
                                    {subItem.submenu.map(
                                      (subSubItem: SubMenuItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          href={subSubItem.href}
                                          target={
                                            subSubItem.name == "Careers"
                                              ? "_blank"
                                              : "_self"
                                          }
                                          className="group hover:bg-foreground/5 p-3 w-full flex items-center gap-3  transition-colors"
                                        >
                                          <span className="text-xl text-primary">
                                            <subSubItem.icon className="w-6 h-6" />
                                          </span>
                                          <div className="flex flex-col">
                                            <span className="text-[16px] text-foreground font-medium">
                                              {subSubItem.name}
                                            </span>
                                          </div>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#333333] lora-medium cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="flex flex-shrink-0">
              <Link
                href="/contact"
                className="bg-[#0224e9] text-white py-[8px] px-10  text-[14px] ltransition-colors duration-200 rounded-full font-medium hover:bg-[#0224e9]/90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Mobile navbar wrapper */}
          <div className="lg:hidden flex items-center justify-between bg-background px-6 py-4 rounded-full shadow">
            {/* Mobile Logo */}
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5 inline-block">
                <Image
                  src="/logo.png"
                  alt="PhaseOne Partners"
                  width={600}
                  height={400}
                  className="h-6 w-auto"
                  priority
                  quality={100}
                />
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-8 w-8 lg:h-6 lg:w-6 text-foreground" aria-hidden="true" />
              ) : (
                <HamburgerIcon
                  className="h-8 w-8 lg:h-6 lg:w-6 text-primary"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu - Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 bg-background z-[150] transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-[100dvh] overflow-auto px-6 pt-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-end mb-4 px-6 py-4 rounded-full">
            <button
              type="button"
              className="rounded-md text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6 text-foreground" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className=" bg-foreground/10 border-b border-background/10 last:border-b-0 px-6 py-3 rounded-md"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className="flex w-full items-center justify-between text-xl font-medium text-foreground "
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        className={`space-y-2 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdown.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="space-y-2 first:pt-4"
                          >
                            {/* Main submenu item */}
                            <Link
                              href={subItem.href}
                              target={
                                subItem.name == "Careers" ? "_blank" : "_self"
                              }
                              className="block py-3 text-base font-bold underline"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl text-secondary">
                                  <subItem.icon className="w-5 h-5" />
                                </span>
                                <div className="flex flex-col">
                                  <span className="text-foreground">
                                    {subItem.name}
                                  </span>
                                </div>
                              </div>
                            </Link>

                            {/* Further submenu items */}
                            {subItem.submenu && (
                              <div className="space-y-1">
                                {subItem.submenu.map(
                                  (subSubItem: SubMenuItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.href}
                                      target={
                                        subSubItem.name == "Careers"
                                          ? "_blank"
                                          : "_self"
                                      }
                                      className="block py-3 text-base font-medium"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <div className="flex items-center gap-3">
                                        <span className="text-xl text-secondary">
                                          <subSubItem.icon className="w-5 h-5" />
                                        </span>
                                        <div className="flex flex-col">
                                          <span className="text-foreground">
                                            {subSubItem.name}
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-xl font-medium text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 py-6">
              <Link
                href="/contact"
                className="block w-full text-center text-base font-medium shadow-sm rounded-full text-background bg-primary py-[16px] px-[16px] text-[16px] lora-medium  hover:bg-primary/90 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
