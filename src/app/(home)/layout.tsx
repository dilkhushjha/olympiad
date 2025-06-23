import type { Metadata } from "next";
import "../globals.css";
import TopNavOlympiad from "@/components/TopNavOlympiad";
import Footer from "@/components/Footer";
import FooterOlympiad from "@/components/FooterOlympiad";
import Breadcrumb from "@/components/Breadcrumbs";
import LearnerSupport from "@/components/LearnerSupport";
import { ContentWrapper } from "@/lib/AppContext";

export const metadata: Metadata = {
  title: "Matrix Edu: Impulse Course for Excellence",
  description:
    "Embark on brilliance with 'Impulse,' a 1-year Integrated Foundation Program for JEE Main & Advanced. Elevate from 11th to 12th seamlessly. Join for academic excellence!",
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
