import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MaxWidthContainer from "@/components/common/MaxWidthContainer";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";
import "./icons.css";
import "@/public/icons.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Zerro - Fast-Growing Technology Company in Australia | Innovative Tech Solutions for Business Growth",
  description:
    "Zerro is a top software development company in Australia, offering innovative solutions to help businesses achieve digital growth. Specializing in custom software and tech-driven strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark:bg-[#000B18]", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <MaxWidthContainer>{children}</MaxWidthContainer>
          <ScrollReveal>
            <Footer />
          </ScrollReveal>
        </ThemeProvider>
      </body>
    </html>
  );
}
