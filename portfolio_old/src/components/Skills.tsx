import * as React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";

const Skill = (props: {
  title: string;
  icon: string;
  height?: number;
  width?: number;
}) => {
  return (
    <div className={styles.skill}>
      <div className={styles.imageWrapper}>
        <Image
          src={props.icon}
          alt={"Skill"}
          objectFit=""
          width={props.width ?? 36}
          height={props.height ?? 36}
        />
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export interface ISkillsProps {}

export function Skills(props: ISkillsProps) {
  return (
    <div className={styles.container}>
      <Skill
        title={"Web Development\nwith react and nextjs"}
        icon="/react.png"
        height={31.3}
      />
      <Skill
        title={"Object oriented programming\nwith java"}
        icon="/java.png"
      />
      <Skill title={"Game development\nwith unity and C#"} icon="/unity.png" />
    </div>
  );
}
