import type { Metadata } from "next";
import "../globals.css";
import TopNavOlympiad from "@/components/TopNavOlympiad";
import FooterOlympiad from "@/components/FooterOlympiad";

import { ContentWrapper } from "@/lib/AppContext";

export const metadata: Metadata = {
  title: "Matrix Olympiad: High-Impact Olympiad Exam for JEE, NEET, CLAT,NDA, Boards & Olympiad",
  description: "High-Impact Olympiad Exam for JEE, NEET, CLAT,NDA, Boards & Olympiad",
  icons: {
    apple: "/faviconolymp.png",
    icon: "/faviconolymp.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <PageTransitionLoader>
    <ContentWrapper>
      <TopNavOlympiad />

      {children}

      <FooterOlympiad />
    </ContentWrapper>
    // </PageTransitionLoader>
  );
}
