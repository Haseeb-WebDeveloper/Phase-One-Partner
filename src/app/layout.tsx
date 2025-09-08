import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";
import { Spotlight } from "@/components/ui/spotlight-new";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PhaseOne Partners",
  description:
    "Connecting businesses with the right investors through strategic deal origination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.variable} antialiased`}>
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
