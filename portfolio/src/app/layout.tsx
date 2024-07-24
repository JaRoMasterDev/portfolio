import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarne Rolf - Web and App Developer",
  description:
    "I am a web and app developer based in Germany and this is my portfolio where I showcase my skills, projects, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-row"}>
        <SidebarNav />
        <main className="w-full">
          {children} <Footer />
        </main>
      </body>
    </html>
  );
}
