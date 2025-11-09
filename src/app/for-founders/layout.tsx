import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Partners for Growth - PhaseOne Partners",
  description:
    "Partners for growth - Helping entrepreneurs achieve their vision.",
};

export default function ForFoundersLayout({
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
