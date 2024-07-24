import Image from "next/image";
import NextJS from "../../../public/nextjs-logo.svg";
import ReactLogo from "../../../public/react-logo.svg";
import MySQL from "../../../public/mysql-logo.svg";
import NodeJS from "../../../public/nodejs-logo.svg";
import TSLogo from "../../../public/ts-logo.svg";
import GitHub from "../../../public/github-logo.svg";
import Docker from "../../../public/docker-logo.svg";
import StackCard from "./TechstackCard";
import AnimatedCards from "./TechstackAnimatedCards";

export default function TechStack() {
  return (
    <section className="w-full pb-16 md:pb-24" id="tech-stack">
      <h2 className="text-3xl mb-2">What tech stack I use</h2>
      <p className="mb-6">
        My current tech stack consists of next.js and react-native for the
        frontend and node.js with express.js for the backend. I use MySQL for my
        databases and TypeScript as my preferred programming language. To store
        and host my projects, I use GitHub and Docker.
      </p>
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
      <p className="mt-12 mb-6">
        Besides that I also have experience with several other technologies and
        programming languages such as Java, C#, Python, Unity and Three.js.
      </p>
      <AnimatedCards />
    </section>
  );
}
