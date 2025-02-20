import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Section from "../../structure/section";
import Container from "../../structure/container";

import space from "../../utils/spacing.util";

import HeroBg from "../../blocks/hero.bg/bg-color-1";

import hero from "../../../styles/sections/index/hero.module.scss";
import button from "../../../styles/blocks/button.module.scss";

import content from "../../../content/index/hero.json";

import { BiDownload } from "react-icons/bi";
import { useRouter } from "next/router";

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
  const router = useRouter();

  const [typingStatus, setTypingStatus] = useState("Initializing");

  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
    router.push("/contact");
    setIsLoading(false);
  };

  return (
    <Section classProp={`${hero.section}`}>
      <Container spacing={"VerticalXXXL"}>
        <TypeAnimation
          className={`${hero.preHeader}`}
          sequence={[
            content.intro.startDelay,
            () => {
              setTypingStatus("typing");
            },
            content.intro.start,
            () => {
              setTypingStatus("typed");
            },
            content.intro.deleteDelay,
            () => {
              setTypingStatus("deleting");
            },
            content.intro.end,
            () => {
              setTypingStatus("deleted");
            },
            content.intro.restartDelay,
          ]}
          speed={content.intro.speed}
          deletionSpeed={content.intro.deletionSpeed}
          wrapper={content.intro.wrapper}
          repeat={Infinity}
        />
        <section>
          <h1 className={hero.header}>{content.header.name}</h1>
          <h1 className={`${hero.header} ${hero.primaryDim}`}>
            {content.header.usp}
          </h1>
        </section>
        <section>
          <p
            className={`${hero.primaryBright} subtitle ${space([
              "verticalLrg",
            ])}`}
          >
            {content.paragraph}
          </p>
        </section>
        <section>
          <button
            className={`button ${button.primary} leaveSite`}
            onClick={handleNavigate}
          >
            {content.buttons.primary.title}
          </button>
          <button className={`button ${button.secondary} `}>
            {/* <a
              href="/resume/Frankline_Kihiu_Resume.pdf"
              download="Frankline_Kihiu_Resume"
            >
              {content.buttons.secondary.title} <BiDownload />
            </a> */}

            <a href="tel:+254726101804" target="_blank">
              {" "}
              Call
            </a>
          </button>

          <p
            className={`${hero.primaryBright} subtitle ${space([
              "verticalLrg",
            ])}`}
          >
            Or send an email to; franklinekihiu@gmail.com
          </p>
        </section>
      </Container>
      <HeroBg theme="bg-color-1" />
    </Section>
  );
}
