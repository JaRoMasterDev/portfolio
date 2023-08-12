import * as React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export interface INavBarProps {}

export function NavBar(props: INavBarProps) {
  return (
    <div className={styles.nav}>
      <ul className={styles.socialmedia}>
        <li>
          <Link href="https://github.com/JaRoMasterDev" target="_blanc">
            <Image
              src="/github-mark.svg"
              alt="discord"
              width={36}
              height={36}
            />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/jaromaster.dev" target="_blanc">
            <Image
              src="/Instagram_Glyph_Black.svg"
              alt="discord"
              width={36}
              height={36}
            />
          </Link>
        </li>
      </ul>
      <ul className={styles.links}>
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#education">Education/Experience</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
