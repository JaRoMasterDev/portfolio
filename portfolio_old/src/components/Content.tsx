import * as React from "react";
import styles from "./Content.module.css";
import { ReactNode } from "react";

export interface IContentProps {
  title: string;
  text: string;
  id: string;
  children?: ReactNode;
}

export function Content(props: IContentProps) {
  return (
    <div className={styles.container}>
      <h2 id={props.id}>{props.title}</h2>
      <div className={styles.content}>
        <p>{props.text}</p>
        {props.children}
      </div>
    </div>
  );
}
