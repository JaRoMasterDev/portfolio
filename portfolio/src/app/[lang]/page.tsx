import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import Projects from "@/app/[lang]/sections/projects";
import About from "@/app/[lang]/sections/About";
import TechStack from "@/app/[lang]/sections/techstack";
import Contact from "@/app/[lang]/sections/Contact";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <PageWrapper className="flex flex-col items-center">
      <div id="about" className="absolute top-0" />
      <h1 className="text-6xl mt-24">Jarne Rolf</h1>
      <h2 className="text-3xl md:text-4xl mt-4">
        <span className="text-red-400">
          <AnimatedText
            words={[
              dictionary.title.web,
              dictionary.title.mobile,
              dictionary.title.frontend,
              dictionary.title.backend,
            ]}
          />
        </span>{" "}
        {dictionary.title.development}
      </h2>
      <About dict={dictionary.about} />
      <Projects dict={dictionary.projects} />
      <TechStack dict={dictionary.techstack} />
      <Contact dict={dictionary.contact} />
    </PageWrapper>
  );
}
