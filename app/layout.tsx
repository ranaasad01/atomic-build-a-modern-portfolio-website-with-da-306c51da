import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Rao Muhammad Ali — SQA Engineer",
  description:
    "Portfolio of Rao Muhammad Ali, a skilled SQA Engineer specializing in test automation, quality assurance, and software testing.",
  keywords: [
    "SQA Engineer",
    "Software Quality Assurance",
    "Test Automation",
    "QA Engineer",
    "Rao Muhammad Ali",
  ],
  authors: [{ name: "Rao Muhammad Ali" }],
  openGraph: {
    title: "Rao Muhammad Ali — SQA Engineer",
    description:
      "Portfolio of Rao Muhammad Ali, a skilled SQA Engineer specializing in test automation, quality assurance, and software testing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-[#0a0a0f] text-white antialiased`}
      >
        <LocaleProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}