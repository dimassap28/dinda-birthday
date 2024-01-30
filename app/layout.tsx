import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../global.css";
import Particles from "@/components/Particles/particles";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dinda Birthday",
  description: "Dinda birthday celebration",
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
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
    <html lang="en" className={`${poppins.variable} ${calSans.variable} scroll-smooth antialiased`}>
      <body className="flex flex-col justify-between min-h-screen">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {children}
      </body>
      <Script src="main.js"></Script>
    </html>
  );
}
