import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import LocaleSwitcher from "@/components/locale-switcher";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarne Rolf - Web and App Developer",
  description:
    "I am a web and app developer based in Germany and this is my portfolio where I showcase my skills, projects, and experiences.",
};

export const generateStaticParams = async () => {
  return [{ lang: "en" }, { lang: "de" }];
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <Head>
        <link
          rel="canonical"
          href="https://www.jarne-rolf.de"
          key="canonical"
        />
      </Head>
      <body className={inter.className + " flex flex-row"}>
        <LocaleSwitcher lang={params.lang} />
        <SidebarNav dict={dict.nav} />
        <main className="w-full">
          {children} <Footer dict={dict.footer} />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
