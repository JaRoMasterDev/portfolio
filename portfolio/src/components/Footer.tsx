import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import Instagram from "../../public/instagram.svg";
import GitHub from "../../public/github-logo.svg";
import type { Dictionary } from "@/get-dictionary";
import { insertElement } from "@/insertElement";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="relative bg-gray-800 w-full py-8 px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center z-50 gap-8">
      <div className="text-gray-400 flex flex-col items-center md:items-start">
        <p>Jarne Rolf</p>
        <Link href={"mailto:contact@jarne-rolf.de"} className="underline">
          contact@jarne-rolf.de
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-end gap-3">
        <div className="flex flex-row gap-5">
          <Link
            href="https://www.instagram.com/jaromaster.dev/"
            target="_blanc"
          >
            <Image src={Instagram} alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="https://github.com/JaRoMasterDev" target="_blanc">
            <Image src={GitHub} alt="GitHub" width={30} height={30} />
          </Link>
        </div>
        <p className="flex items-center text-white">
          {insertElement(dict.madeWith, {
            heart: <FaHeart color="red" className="mx-1" key="heart" />,
            name: (
              <Link
                href="https://www.jarne-rolf.de"
                className="underline text-accent ml-1"
                target="_blanc"
                key="name"
              >
                Jarne Rolf
              </Link>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}
