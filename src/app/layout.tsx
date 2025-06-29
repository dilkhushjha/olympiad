import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matrix Olympiad",
  description: "High-Impact Olympiad Exam for JEE, NEET, CLAT,NDA, Boards & Olympiad",
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`antialiased font-chopin`}
      >
        {children}
      </body>
    </html>
  );
}
