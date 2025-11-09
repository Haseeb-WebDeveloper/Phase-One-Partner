import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "For Investors - PhaseOne Partners",
  description:
    "For investors - Connecting you with founder-led businesses before they even reach the market.",
};

export default function ForInvestorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar isLight={true} />
      {children}
    </div>
  );
}
