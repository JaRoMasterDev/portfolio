import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import Instagram from "../../public/instagram.svg";
import GitHub from "../../public/github-logo.svg";

export interface IFooterProps {}

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 w-full py-8 px-12 xl:px-16 flex justify-between items-center z-50">
      <div className="text-gray-400">
        <p>Jarne Rolf</p>
        <Link href={"mailto:contact@jarne-rolf.de"} className="underline">
          contact@jarne-rolf.de
        </Link>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="flex flex-row gap-5">
          <Link
            href="https://www.instagram.com/mygainplan_app/"
            target="_blanc"
          >
            <Image src={Instagram} alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="https://www.threads.net/@mygainplan_app" target="_blanc">
            <Image src={GitHub} alt="Threads" width={30} height={30} />
          </Link>
        </div>
        <p className="flex items-center text-white">
          Made with &nbsp;
          <FaHeart color="red" />
          &nbsp;by&nbsp;
          <Link
            href="https://www.jarne-rolf.de"
            className="underline text-accent"
            target="_blanc"
          >
            Jarne Rolf
          </Link>
        </p>
      </div>
    </footer>
  );
}
