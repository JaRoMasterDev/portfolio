import styles from "./page.module.css";
import { NavBar } from "@/components/NavBar";
import { Content } from "@/components/Content";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <section className={styles.content}>
        <div className={styles.title}>
          <h1>Jarne Rolf</h1>
          <h2>Web and app development</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <Content
              id="about"
              title="About Me"
              text={
                "I am a 17-years-old self taught software developer with over three years of experience in game, web and app development. \nI am currently in school getting my Abitur, the german equivalent to a highschool diploma that serves as a general qualification for university entrance. \nOn the side I work as a junior software developer at a local company for a few hours per week. \nI have been working on several projects and gained many skills throughout the last 3 years which I'll be displaying on this portfolio."
              }
            ></Content>
            <Content
              id="education"
              title="Education/Experience"
              text={
                "I am currently in school and I will probably get my Abitur in June 2024. \nOn the side I work at a local company as a junior software developer. The team I work in works on a mobile app built with React-Native. \nAfter my graduation, I plan to do a year abroad to gather experience living alone and financing my own life. After that year, I am probably going to study computer science at an university."
              }
            ></Content>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.row}>
            <Content
              id="projects"
              title="Projects"
              text={
                "I worked on several projects of different sizes and complexities. \nHereafter, I am going to represent my favorite projects. \nFurther projects can be seen on my GitHub."
              }
            >
              <Projects />
            </Content>
            <Content
              id="skills"
              title="Skills"
              text={
                "Over the past years I was learning several skills including multuiple programming languages and concepts. Some of my most developed skills are"
              }
            >
              <Skills />
            </Content>
          </div>
        </div>
        <div className={styles.contact}>
          <h2 id="contact">Contact</h2>
          <p>
            If you want to reach out to me, you can send me an email to <br />
            <a href="mailto:contact@jarne-rolf.de">contact@jarne-rolf.de</a>.
            <br />I am open to collaborations and other requests!
          </p>
        </div>
      </section>
    </main>
  );
}
