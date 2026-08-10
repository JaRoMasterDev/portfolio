"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";

function ListItem({
  href,
  title,
  selected,
  isOpen,
  close,
}: {
  href: string;
  title: string;
  selected?: boolean;
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <li className="relative min-w-4 z-30">
      <Link
        href={href}
        className="flex items-center gap-3 h-8"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        <div
          className={
            selected
              ? "absolute w-4 h-4 rounded-full bg-primary "
              : "absolute left-1 w-2 h-2 rounded-full bg-gray-500"
          }
        />
        <span
          className={`relative transition-all text-nowrap xl:w-auto ${isOpen ? "w-screen md:w-72" : "w-0"} ${selected ? "left-6 text-xl font-semibold text-primary" : "left-4 text-lg"}`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}

export default function SidebarNav({
  dict,
  lang,
}: {
  dict: Dictionary["nav"];
  lang: Locale;
}) {
  const [selectedId, setSelectedId] = useState("about");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sections = useRef<{ id: string; title: string }[]>([
    { id: "about", title: dict.about },
    { id: "projects", title: dict.projects },
    { id: "tech-stack", title: dict.techstack },
    { id: "contact", title: dict.contact },
  ]);

  useEffect(() => {
    // The sections are looked up on every run instead of once on mount:
    // this component lives in the layout and survives client side
    // navigation, so anything captured on mount would point at the
    // previous page's DOM after a route change.
    const updateSelected = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let selectedId = "";
      document.querySelectorAll("section").forEach((section) => {
        if (section.offsetTop <= scrollPosition + windowHeight / 2) {
          selectedId = section.id;
        }
      });
      setSelectedId(selectedId);
    };

    updateSelected();
    window.addEventListener("scroll", updateSelected, { passive: true });
    window.addEventListener("resize", updateSelected);

    return () => {
      window.removeEventListener("scroll", updateSelected);
      window.removeEventListener("resize", updateSelected);
    };
  }, [pathname]);

  return (
    <nav className="fixed flex bottom-0 top-0 z-10 pb-[5%] pt-[5%] justify-center">
      <ul
        className={`absolute pl-6 xl:pl-8 -left-[7px] w-auto xl:w-72 flex flex-col self-center justify-center gap-6 overflow-hidden xl:bg-transparent bg-opacity-90 h-screen ${isOpen ? "bg-gray-100" : ""}`}
      >
        {sections.current.map((section) => (
          <ListItem
            key={section.id}
            href={`/${lang}#${section.id}`}
            title={section.title}
            selected={selectedId === section.id}
            isOpen={isOpen}
            close={() => setIsOpen(false)}
          />
        ))}
      </ul>
      <div className="w-[2px] bg-gray-300 mx-6 xl:mx-8 overflow-visible flex flex-col flex-1 justify-between z-20">
        <div className="relative w-2 h-2 rounded-full bg-inherit -translate-x-1/2 left-1/2 -translate-y-1/2" />
        <div className="relative w-2 h-2 rounded-full bg-inherit -translate-x-1/2 left-1/2 translate-y-1/2" />
      </div>
      <button
        className="absolute left-12  z-20select-none cursor-pointer inline xl:hidden mb-8 self-start"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="h-5 w-6 relative">
          <div
            className={`h-0.5 w-6 bg-black transition-all absolute ${isOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"}`}
          />
          <div
            className={`h-0.5 w-6 bg-black transition-all absolute translate-y-[-50%] top-1/2 ${isOpen ? "hidden" : ""}`}
          />
          <div
            className={`h-0.5 w-6 bg-black transition-all absolute ${isOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"}`}
          />
        </div>
      </button>
    </nav>
  );
}
