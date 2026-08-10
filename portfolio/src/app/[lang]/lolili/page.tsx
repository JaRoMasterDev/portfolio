import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Locale } from "@/i18n-config";
import { landing } from "./content";
import LoliliIcon from "../../../../public/LoliliIcon.png";
import LoliliBuecher from "../../../../public/LoliliBuecher.png";
import LoliliDetails from "../../../../public/LoliliDetails.png";
import LoliliAusleihen from "../../../../public/LoliliAusleihen.png";

export const metadata: Metadata = {
  title: "Lolili – Deine persönliche Bibliothek",
  description:
    "Lolili ist eine App für iPhone und iPad, mit der du deine Bücher per Barcode erfasst, in Kategorien sortierst und deine Ausleihen im Blick behältst.",
};

export default function LoliliPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = landing[lang] ?? landing.en;
  const shots = [
    { src: LoliliBuecher, alt: t.shots[0] },
    { src: LoliliDetails, alt: t.shots[1] },
    { src: LoliliAusleihen, alt: t.shots[2] },
  ];

  return (
    <PageWrapper>
      <header className="flex flex-col items-center text-center mt-12">
        <Image
          src={LoliliIcon}
          alt="Lolili"
          width={120}
          height={120}
          className="rounded-[25%] shadow-lg"
        />
        <h1 className="text-5xl mt-8">Lolili</h1>
        <h2 className="text-xl md:text-2xl mt-3 text-red-400">{t.tagline}</h2>
        <p className="max-w-2xl mt-6 leading-7">{t.intro}</p>
      </header>

      <section className="w-full py-16 md:py-24">
        <h2 className="text-3xl mb-8">{t.featuresTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-xl mb-1">{feature.title}</h3>
              <p className="leading-7">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <h2 className="text-3xl mb-8">{t.screenshotsTitle}</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center sm:items-start">
          {shots.map((shot) => (
            <figure key={shot.alt} className="flex flex-col items-center">
              <Image
                src={shot.src}
                alt={shot.alt}
                className="w-[220px] h-auto rounded-2xl border border-gray-200 shadow-md"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                {shot.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <h2 className="text-3xl mb-2">{t.privacyTitle}</h2>
        <p className="leading-7">{t.privacyText}</p>
        <Link
          href={`/${lang}/lolili/privacy`}
          className="inline-block mt-4 underline text-red-400"
        >
          {t.privacyLink}
        </Link>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <h2 className="text-3xl mb-2">{t.supportTitle}</h2>
        <p className="leading-7">{t.supportText}</p>
        <Link
          href="mailto:contact@jarne-rolf.de"
          className="inline-block mt-4 underline text-red-400"
        >
          contact@jarne-rolf.de
        </Link>
      </section>

      <Link href={`/${lang}`} className="underline text-gray-500">
        {t.back}
      </Link>
    </PageWrapper>
  );
}
