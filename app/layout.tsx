import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description: "Crypto Market Data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex flex-col items-center bg-slate-100 lg:py-20 lg:px-12 px-4 py-4 gap-8">
      <NavHeader />
        {children}
      </main>
        </body>
    </html>
  );
}
