import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "../app/components/navigation"
import Footer from "../app/components/footer"
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu-plus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
