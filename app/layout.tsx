import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Poppins, Sacramento } from "next/font/google";
import "./globals.css";
import "../global.css";
import Script from "next/script";
import AOSinit from "@/components/AOS/AOSFunctioin";

export const metadata: Metadata = {
  title: "Dinda Birthday",
  description: "Dinda birthday celebration",
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-sacramento",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${calSans.variable} ${sacramento.variable} scroll-smooth antialiased`}>
      <AOSinit />
      <body className="flex flex-col justify-between min-h-screen"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        {children}
        <Script id="aos-js" src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </body>
    </html>
  );
}
