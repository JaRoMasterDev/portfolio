import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarne Rolf - Web and app development",
  description:
    "I am a student and a web and app developer who enjoys learning and solving logical problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.jarne-rolf.de"
          key="canonical"
        />
        <meta
          name="google-site-verification"
          content="CTUhE3_2aPJeTxlTh8p7yQNR_H5V1hgJ4Ydka2nw1PQ"
          key="google-site-verification"
        />
      </Head>

      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
