import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Poppins, Lato, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";
import { ThemeProvider } from "@/components/theme-provided";
import StickyDiscoveryButton from "@/components/ui/sticky-discovery-button";

const bricol = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
      <body className={`${bricol.variable} ${manrope.variable} ${poppins.variable} ${lato.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        <SmoothScrolling>
          <StickyDiscoveryButton />
          {children}
          <Footer />
        </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
