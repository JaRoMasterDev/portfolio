import React from "react";
import MyGainplan from "../../../public/MyGainplanScreenshot.jpeg";
import MyGainplanIcon from "../../../public/MyGainplanIcon.png";
import SolarSystemIcon from "../../../public/SolarSystemIcon.png";
import SolarSystemScreenshot from "../../../public/SolarSystemScreenshot.jpeg";
import PlaygroundIcon from "../../../public/PlaygroundIcon.png";
import Project from "@/app/sections/Project";

export default function Projects() {
  return (
    <section id="projects" className="w-full pb-16 md:pb-24">
      <h2 className="text-3xl mb-2">What I have worked on</h2>
      <p>Here are some projects I have worked on over the past years</p>
      <Project
        title="MyGainplan"
        description="A social media based fitness app that helps users manage and update their workout plans. MyGainplan is build with react-native, MySQl, node.js and express.js and is my biggest side project so far."
        link="https://my-gainplan.com"
        image={MyGainplanIcon}
        hoverImage={MyGainplan}
      />
      <Project
        title="Animated 3D Solar System"
        description="An animated 3D solar system created using Three.js that visualises the planets rotating speed around the sun and their own axis. I have built this project during an internship at a web development company."
        link="https://jaromasterdev.github.io/webgl-solar-system/"
        image={SolarSystemIcon}
        hoverImage={SolarSystemScreenshot}
      />
      <Project
        title="Playgound"
        description="This is a page where I showcase this I've tried out and minigames I have built that have faced me with all kinds of new and interesting challenges."
        link="https://playground.jarne-rolf.de"
        image={PlaygroundIcon}
      />
    </section>
  );
}
