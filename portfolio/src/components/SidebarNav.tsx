"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

const sections: { id: string; title: string }[] = [
  { id: "about", title: "Who I am" },
  { id: "projects", title: "What I have worked on" },
  { id: "tech-stack", title: "What tech stack I use" },
  { id: "contact", title: "Contact" },
];

export default function SidebarNav() {
  const [selectedId, setSelectedId] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const windowHeight = window.innerHeight;

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      let selectedId = "";
      sections.forEach((section) => {
        const { offsetTop } = section;
        if (offsetTop <= scrollPosition + windowHeight / 2) {
          selectedId = section.id;
        }
      });
      setSelectedId(selectedId);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <nav className="fixed flex bottom-0 top-0 z-10 pb-[5%] pt-[5%] justify-center">
      <ul
        className={`absolute pl-6 xl:pl-8 -left-[7px] w-auto xl:w-72 flex flex-col self-center justify-center gap-6 overflow-hidden xl:bg-transparent bg-opacity-90 h-screen ${isOpen ? "bg-gray-100" : ""}`}
      >
        {sections.map((section) => (
          <ListItem
            key={section.id}
            href={`#${section.id}`}
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
