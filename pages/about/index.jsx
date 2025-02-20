// Core packages
import Image from "next/image";

// Section structure
import Section from "../../components/structure/section";
import Container from "../../components/structure/container";

// Section general blocks
import SectionTitle from "../../components/blocks/section.title.block";
import SectionGridBg from "../../components/blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../components/blocks/about.badges.block";
import CopyBlock from "../../components/blocks/about.copy.block";

// Section scss
import about from "../../styles/sections/index/about.module.scss";
import Technical from "../../components/sections/index/technical";

import { FaEarListen } from "react-icons/fa6";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="
          With a strong background in technology and business strategy, I specialize in creating scalable, efficient, and results-driven solutions tailored to modern market demands. My journey is fueled by a commitment to problem-solving, innovation, and helping businesses navigate the ever-evolving digital landscape."
          subTitle2="I'm open to any collaboration in building business solutions, leveraging technology and innovation to drive growth, efficiency, and long-term success."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/family-photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={800} height={1000} /> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Enterprenuership"
              containerClass={about.container}
              iconClass={about.icon}
              copy="Entrepreneurship is about vision, resilience, and making an impact. I founded Ninjalig Technologies to empower businesses with digital solutions, launched Mr Trendy to share my passion for high quality fashion, and built Nextwave Gadgets to bring cutting-edge tech to Kenya, while embracing growth in farming. I give thanks to God Almighty for His wisdom and blessings."
            />

            <BadgesBlock
              title="Tech and Businesses"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              copy="I leverage my tech expertise to build innovative solutions that optimize operations, boost growth, and solve challenges within my businesses and for my clients. Technology is the bridge that connects vision to execution, making entrepreneurship more dynamic and adaptable in today's digital world."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />

            {/* <div className={about.para}>
              <h3>Soft skills that pay the bills</h3>
            </div> */}

            <CopyBlock
              title="Crypto-Trading"
              containerClass={about.container}
              iconClass={about.icon}
              copy="In addition to my technical expertise, I also do Crypto-Trading in several platforms like Binance. I have been trading crypto for 4 years now and the journey has been nothing short of amazing. Fun fact, I decided to learn how to build Dapps after interacting with a few Dapps in the crypto space and saw how life changing the ecosystem is. I wanted to be part of the builders making it happen and also change someones life somewhere."
            />
          </div>
        </section>
      </Container>
      <Technical />
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research" },
  { key: "qrcode", name: "Digital Strategy" },
  { key: "window", name: "Design Systems" },
  { key: "cubes", name: "Product Strategy" },
  { key: "layer-plus", name: "Brand Strategy" },
  { key: "solar-system", name: "Operations" },
];
