import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";

const bricol = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Founder - PhaseOne Partners",
  description:
    "Partners for growth - Helping entrepreneurs achieve their vision.",
};

export default function FounderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-primary to-80% to-background min-h-screen">
      <SmoothScrolling> 
        <Navbar />
        {children}
        <Footer />
      </SmoothScrolling>
    </div>
  );
}
