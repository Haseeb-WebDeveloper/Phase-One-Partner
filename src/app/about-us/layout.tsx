import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "About Us - PhaseOne Partners",
  description:
    "Connecting founders & investors for lasting success.",
};

export default function AboutUsLayout({
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

