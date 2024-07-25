"use client";
import React from "react";
import { Dictionary } from "@/get-dictionary";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <h2 className="text-3xl mb-2">{dict.whoIAm}</h2>
      <div className="flex flex-col gap-3 leading-7">
        <p>{dict.school}</p>
        <p>{dict.work}</p>
        <p>{dict.university}</p>
      </div>
    </section>
  );
}
