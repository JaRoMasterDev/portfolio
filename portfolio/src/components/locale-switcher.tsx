"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, Locale } from "@/i18n-config";
import de from "../../public/de.svg";
import en from "../../public/us.svg";
import fr from "../../public/fr.svg";
import es from "../../public/es.svg";
import nl from "../../public/nl.svg";
import Image from "next/image";
import { setCookie } from "cookies-next";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="absolute top-8 right-8 flex gap-3">
      <Link
        href={redirectedPathName("en")}
        className={lang !== "en" ? "opacity-50" : ""}
        onClick={() => setCookie("lang", "en")}
      >
        <Image src={en} alt="English" height={30} />
      </Link>
      <Link
        href={redirectedPathName("de")}
        className={lang !== "de" ? "opacity-50" : ""}
        onClick={() => setCookie("lang", "de")}
      >
        <Image src={de} alt="Deutsch" height={30} />
      </Link>
      <Link
        href={redirectedPathName("es")}
        className={lang !== "es" ? "opacity-50" : ""}
        onClick={() => setCookie("lang", "es")}
      >
        <Image src={es} alt="Español" height={30} />
      </Link>
      <Link
        href={redirectedPathName("fr")}
        className={lang !== "fr" ? "opacity-50" : ""}
        onClick={() => setCookie("lang", "fr")}
      >
        <Image src={fr} alt="Français" height={30} />
      </Link>
      <Link
        href={redirectedPathName("nl")}
        className={lang !== "nl" ? "opacity-50" : ""}
        onClick={() => setCookie("lang", "nl")}
      >
        <Image src={nl} alt="Nederlands" height={30} />
      </Link>
    </div>
  );
}
