import StackCard from "./TechstackCard";
import Image from "next/image";
import JavaLogo from "../../../../public/java-logo.svg";
import CSLogo from "../../../../public/cs-logo.svg";
import PythonLogo from "../../../../public/python-logo.svg";
import UnityLogo from "../../../../public/unity-logo.svg";
import ThreeJSLogo from "../../../../public/threejs-logo.svg";

const cards: React.ReactNode[] = [
  <StackCard key="java" className="p-3 min-w-48">
    <div className="h-full mr-4">
      <Image src={JavaLogo} alt={"Java"} className="w-full h-full" />
    </div>
    Java
  </StackCard>,
  <StackCard key="cs" className="p-2 min-w-48">
    <Image src={CSLogo} alt={"C#"} className="h-full" />
  </StackCard>,
  <StackCard key="python" className="p-4 min-w-48">
    <Image src={PythonLogo} alt={"Python"} className={"h-full w-full"} />
  </StackCard>,
  <StackCard key="unity" className="p-3 min-w-48">
    <Image src={UnityLogo} alt={"Unity"} className={"h-full w-full"} />
  </StackCard>,
  <StackCard key="threejs" className="min-w-48">
    <div className="h-full mr-2 p-1 ">
      <Image src={ThreeJSLogo} alt={"Three.js"} className={"h-full w-full"} />
    </div>
    Three.js
  </StackCard>,
];

// 200px per card

export default function AnimatedCards() {
  return (
    <div className={`w-full overflow-hidden`}>
      <div className={"flex flex-row gap-2 animate-infinitecards"}>
        {cards.map((card) => card)}
        {cards.map((card) => card)}
      </div>
    </div>
  );
}
