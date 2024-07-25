import Image from "next/image";
import NextJS from "../../../../public/nextjs-logo.svg";
import ReactLogo from "../../../../public/react-logo.svg";
import MySQL from "../../../../public/mysql-logo.svg";
import NodeJS from "../../../../public/nodejs-logo.svg";
import TSLogo from "../../../../public/ts-logo.svg";
import GitHub from "../../../../public/github-logo.svg";
import Docker from "../../../../public/docker-logo.svg";
import StackCard from "./TechstackCard";
import AnimatedCards from "./TechstackAnimatedCards";
import { Dictionary } from "@/get-dictionary";

export default function TechStack({ dict }: { dict: Dictionary["techstack"] }) {
  return (
    <section className="w-full pb-16 md:pb-24" id="tech-stack">
      <h2 className="text-3xl mb-2">{dict.whatTechStack}</h2>
      <p className="mb-6">{dict.description}</p>
      <div className="flex flex-row items-end  w-full md:w-1/2 relative">
        <StackCard className="py-2 translate-y-1/2 max-w-[45%]">
          <Image src={MySQL} alt={"mysql"} className={"h-full"} />
        </StackCard>
        <div className="flex flex-1 border-dashed border-gray-300 border-t-2" />
        <StackCard className="absolute right-0 md:translate-x-1/2 py-2 translate-y-1/2 max-w-[45%]">
          <Image src={NodeJS} alt={"nodejs"} className="h-full" />
        </StackCard>
      </div>
      <div className="flex w-full flex-col items-center h-96 relative">
        <div className="h-full border-dashed border-gray-300 border-r-2" />
        <div className="absolute right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 top-1/3 flex flex-row justify-end gap-2">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700 p-1">
            <Image src={TSLogo} alt={"typescript"} />
          </div>
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700 p-1">
            <Image src={GitHub} alt={"github"} />
          </div>
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700 p-1 flex justify-center items-center">
            <Image src={Docker} alt={"docker"} />
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-row w-full items-end">
          <StackCard className="p-8 max-w-[45%]">
            <Image src={NextJS} alt={"nextjs"} />
          </StackCard>
          <div className="flex flex-1 border-dashed border-gray-300 border-t-2 h-8 bg-white" />
          <StackCard className="max-w-[45%]">
            <Image
              src={ReactLogo}
              alt={"react"}
              width={42}
              className="mx-2 px-0.5"
            />
            React-Native
          </StackCard>
        </div>
      </div>
      <p className="mt-12 mb-6">{dict.subdescription}</p>
      <AnimatedCards />
    </section>
  );
}
