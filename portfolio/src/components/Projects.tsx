import * as React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Project = (props: {
  src: string;
  name: string;
  description: string;
  href: string;
}) => {
  return (
    <Link href={props.href} target="_blanc" className={styles.project}>
      <div className={styles.header}>
        <Image src={props.src} alt={props.name} width={56} height={56} />
        <h3>{props.name}</h3>
        <FaExternalLinkAlt />
      </div>
      <p className={styles.tooltip}>{props.description}</p>
    </Link>
  );
};

export interface IProjectsProps {}

export function Projects(props: IProjectsProps) {
  return (
    <div className={styles.container}>
      <Project
        href="https://workout-planner-website.vercel.app/"
        src={"/ic_launcher.png"}
        name={"MyGainplan"}
        description={
          "An app that helps you plan and keep track of your workouts and find other people's workouts."
        }
      />
      <Project
        href="https://jaromasterdev.github.io/webgl-solar-system"
        src={"/sonnensystem.png"}
        name={"3D Solar System"}
        description={
          "A 3D solar system animation which completely runs in the browser. This website uses WebGL and Three.js."
        }
      />
    </div>
  );
}
