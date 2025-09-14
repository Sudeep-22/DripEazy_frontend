import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export const metadata: Metadata = {
  title: "DripEazy - Clothing store",
  description: "Fashion that speaks for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-gray-50"
      >
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
