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
          subTitle="I design, build, test and deploy smart contracts with Solidity on EVM based blockchains to deliver secure, transparent and decentralized solutions compatible with your needs."
          subTitle2="I'm open to any collaboration in building DAPPs, auditing them for vulnerabilities and anything security-related."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/family-photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={800} height={1000} /> */}
          </div>
          <div className={about.copy}>
            <BadgesBlock
              title="Reasearch and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />

            <div className={about.para}>
              <h3>Soft skills that pay the bills</h3>
            </div>

            <CopyBlock
              title="Crypto-Trading"
              containerClass={about.container}
              iconClass={about.icon}
              copy="In addition to my technical expertise, I also do Crypto-Trading in several platforms like Binance. I have been trading crypto for 4 years now and the journey has been nothing short of amazing. Fun fact, I decided to learn how to build Dapps after interacting with a few Dapps in the crypto space and saw how life changing the ecosystem is. I wanted to be part of the builders making it happen and also change someones life somewhere."
            />

            <CopyBlock
              title="Entrepreneurship"
              containerClass={about.container}
              iconClass={about.icon}
              copy="I also run businesses which include Ninja Supplies (a company that farms & suppliers farm produce), Mr Trendy (a men's luxury boutique) and NinjaLig Technologies which is both a tech solutions and a gaming company."
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
