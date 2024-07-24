"use client";

import * as React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export interface INavBarProps {}

export function NavBar(props: INavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.nav + (open ? " " + styles.open : "")}>
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
          <li className={styles.menu}>
            {!open ? (
              <RxHamburgerMenu size={36} onClick={() => setOpen(true)} />
            ) : (
              <RxCross1 size={36} onClick={() => setOpen(false)} />
            )}
          </li>
        </ul>
        <ul
          onClick={() => setOpen(false)}
          className={styles.links + (open ? " " + styles.open : "")}
        >
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
    </>
  );
}
