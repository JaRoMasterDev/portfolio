import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { Locale } from "@/i18n-config";
import { privacy } from "../content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Lolili",
  description:
    "Wie die App Lolili mit deinen Daten umgeht: alles bleibt auf deinem Gerät, kein Konto, kein Tracking.",
};

export default function LoliliPrivacyPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = privacy[lang] ?? privacy.en;

  return (
    <PageWrapper>
      <h1 className="text-4xl mt-12">{t.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{t.updated}</p>
      <p className="mt-8 leading-7 max-w-3xl">{t.intro}</p>

      {t.sections.map((section) => (
        <section key={section.heading} className="mt-12 max-w-3xl">
          <h2 className="text-2xl mb-3">{section.heading}</h2>
          <div className="flex flex-col gap-3 leading-7">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl mb-3">{t.contactHeading}</h2>
        <p className="leading-7">{t.contactText}</p>
        <p className="mt-3 leading-7">
          Jarne Rolf
          <br />
          <Link
            href="mailto:contact@jarne-rolf.de"
            className="underline text-red-400"
          >
            contact@jarne-rolf.de
          </Link>
        </p>
      </section>

      <Link
        href={`/${lang}/lolili`}
        className="inline-block mt-16 underline text-gray-500"
      >
        {t.back}
      </Link>
    </PageWrapper>
  );
}
