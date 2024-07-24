"use client";
import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full pt-16 md:pt-24">
      <h2 className="text-3xl mb-2">Who I am</h2>
      <div className="flex flex-col gap-2 leading-7">
        <p>
          I am an 18 year old student from Germany who has just finished his
          Abitur with a focus on mathematics and computer science. Over the last
          4 years I have built skills in several fields of development with a
          focus on web and app development. I have worked on several projects,
          some of which you are displayed below.
        </p>
        <p>
          Besides that I have been working as a junior developer at a local
          company since 2021 for a few hours a week while I was in school.
          There, I am working on a mobile app built with react-native.
        </p>
        <p>
          From Autumn 2025 I&apos;ll be studying computer science at a
          university. Until then, I am going to spend some time travelling
          through Spain while keeping my job as a junior developer. In addition
          to that, I am looking forward to meeting awesome people and working on
          some side projects to improve my skills.
        </p>{" "}
      </div>
    </section>
  );
}
