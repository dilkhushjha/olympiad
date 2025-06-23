import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matrix Edu: Impulse Course for Excellence",
  description: "Embark on brilliance with 'Impulse,' a 1-year Integrated Foundation Program for JEE Main & Advanced. Elevate from 11th to 12th seamlessly. Join for academic excellence!",
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
