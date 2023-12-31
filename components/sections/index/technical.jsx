// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <CopyBlock
              title="Foundation"
              icon={["fat", "chart-network"]}
              copy="With a strong 3 years foundation in development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
              iconClass={about.icon}
              containerClass={about.container}
            />
            <BadgesBlock
              title="Software I love to work with"
              copy="With my experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="I design and develop stylish and modern services for customers of all sizes, specializing in building blockchain-based solutions."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings Img by Colorpong"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "react", name: "Remix", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "github", name: "Github", type: "devicon" },
  { key: "debian", name: "Debian", type: "devicon" },
  { key: "android", name: "Android Studio", type: "devicon" },
  { key: "linux", name: "Linux", type: "devicon" },
];

const tech = [
  { key: "solidity", name: "Solidity", type: "devicon" },
  { key: "appwrite", name: "Hardhat", type: "devicon" },
  { key: "debian", name: "ThirdWeb", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "tailwindcss", name: "TailWindCss", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];
