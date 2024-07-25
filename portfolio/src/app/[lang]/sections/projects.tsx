import React from "react";
import MyGainplan from "../../../../public/MyGainplanScreenshot.jpeg";
import MyGainplanIcon from "../../../../public/MyGainplanIcon.png";
import SolarSystemIcon from "../../../../public/SolarSystemIcon.png";
import SolarSystemScreenshot from "../../../../public/SolarSystemScreenshot.jpeg";
import PlaygroundIcon from "../../../../public/PlaygroundIcon.png";
import Project from "@/app/[lang]/sections/Project";
import { Dictionary } from "@/get-dictionary";

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section id="projects" className="w-full pb-16 md:pb-24">
      <h2 className="text-3xl mb-2">{dict.whatIHaveWorkedOn}</h2>
      <p>{dict.description}</p>
      <Project
        title={dict.mygainplan.title}
        description={dict.mygainplan.description}
        link="https://my-gainplan.com"
        image={MyGainplanIcon}
        hoverImage={MyGainplan}
      />
      <Project
        title={dict.animatedSolarSystem.title}
        description={dict.animatedSolarSystem.description}
        link="https://jaromasterdev.github.io/webgl-solar-system/"
        image={SolarSystemIcon}
        hoverImage={SolarSystemScreenshot}
      />
      <Project
        title={dict.playground.title}
        description={dict.playground.description}
        link="https://playground.jarne-rolf.de"
        image={PlaygroundIcon}
      />
    </section>
  );
}
