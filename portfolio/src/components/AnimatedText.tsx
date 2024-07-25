"use client";
import React, { useEffect, useRef, useState } from "react";

export interface AnimatedTextProps {
  words: string[];
}

export default function AnimatedText({ words }: AnimatedTextProps) {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const isIncreasing = useRef<boolean>(true);

  useEffect(() => {
    if (isIncreasing.current) {
      if (text.length >= words[wordIndex].length) {
        // If the text is fully typed out, wait 1 second and start deleting
        isIncreasing.current = false;
        setTimeout(() => setText((text) => text.slice(0, -1)), 3000);
      } else {
        // If the text is not fully typed out, add a letter
        setTimeout(() => {
          setText((text) => text + words[wordIndex][text.length]);
        }, 100);
      }
    } else {
      if (text.length === 0) {
        // If the text is fully deleted, start typing the next word
        isIncreasing.current = true;
        const newWordIndex = (wordIndex + 1) % words.length;
        setWordIndex(newWordIndex);
        setTimeout(() => setText(words[newWordIndex][0]), 300);
      } else {
        // If the text is not fully deleted, delete a letter
        setTimeout(() => {
          setText((text) => text.slice(0, -1));
        }, 100);
      }
    }
  }, [text]);

  return <>{text}</>;
}
