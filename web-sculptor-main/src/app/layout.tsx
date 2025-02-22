import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Sculptor",
  description: "Next-Gen UI Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0908] text-slate-100">
      <body className={urbanist.className}>
        <Header />
        {children}
        {/* <div className="h-[300vh]"></div> */}
        {/* <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div> */}
        {/* <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div> */}
      </body>
    </html>
  );
}
