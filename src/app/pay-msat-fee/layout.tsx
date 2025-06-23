import type { Metadata } from "next";
import "../globals.css";
import { ContentWrapper } from "@/lib/AppContext";



export const metadata: Metadata = {
    title: "Matrix Edu: Impulse Course for Excellence",
    description: "Embark on brilliance with 'Impulse,' a 1-year Integrated Foundation Program for JEE Main & Advanced. Elevate from 11th to 12th seamlessly. Join for academic excellence!",
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
                <ContentWrapper>

                    {/* <Navbar /> */}

                    {children}
                    {/* <section className="spacing-xy"><LearnerSupport /></section> */}

                </ContentWrapper>
            </body>
        </html>
    );
}
