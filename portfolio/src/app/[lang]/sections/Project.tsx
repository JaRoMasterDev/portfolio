"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Project({
  title,
  description,
  link,
  image,
  hoverImage,
}: {
  title: string;
  description: string;
  link: string;
  image: StaticImport;
  hoverImage?: StaticImport;
}) {
  const [hovering, setHovering] = useState<boolean>(false);
  return (
    <Link
      href={link}
      className="flex flex-row gap-8 mt-16"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <div className="relative w-[100px] md:w-[150px] h-[100px] md:h-[150px]">
        <Image
          src={image}
          alt={title}
          className={`absolute w-full h-full rounded-[25%] transition-opacity duration-500 ${hovering && hoverImage ? "opacity-0" : "opacity-100 rounded-[25%]"}`}
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={title}
            className={`transition-all duration-500 ${hovering ? "opacity-100" : "opacity-0 rounded-[25%]"}`}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
