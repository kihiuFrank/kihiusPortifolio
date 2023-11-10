import Section from "../../components/structure/section";
import Container from "../../components/structure/container";

import HeroBg from "../../components/blocks/hero.bg/bg-color-1";

import hero from "../../styles/sections/index/hero.module.scss";
import button from "../../styles/blocks/button.module.scss";

import content from "../../content/index/hero.json";
import { useRouter } from "next/router";

import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import emailjs from "@emailjs/browser";

// Section scss
import contact from "../../styles/sections/index/contact.module.scss";
import SectionTitle from "../../components/blocks/section.title.block";
import ContactForm from "../../components/sections/contactForm/contactForm";

import Image from "next/image";

export default function Contact() {
  return (
    <Section classProp={contact.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Contact Me"
          preTitle="Synopsis"
          subTitle="Reach out, let's discuss your project."
          subTitle2=""
        />

        {/* <div className={contact.content}>
          <div className={contact.contactList}>
            <ul>
              <li>
                <h3>
                  <i>
                    <BsFillTelephoneFill />
                  </i>{" "}
                  Phone
                </h3>
                <span>
                  <a href="tel:+254 726-101-804">+254 726-101-804</a>
                </span>
              </li>
              <li>
                <h3>
                  <i>
                    <MdEmail />
                  </i>{" "}
                  Email Address
                </h3>
                <span>
                  <a href="mailto:martian@email.com">
                    franklinekihiu@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <h3>
                  <i>
                    <ImLocation />
                  </i>{" "}
                  Official Address
                </h3>
                <span>Nairobi</span>
              </li>
            </ul>
          </div>

          <div className={contact.contactRight}>
            <p>
              I'm always open to discussing product
              <br />
              <span>design work or partnerships.</span>
            </p>
            <ContactForm />
          </div>
        </div> */}
        <div className={contact.content}>
          <div className={contact.items}>
            <div className={contact.wrapper}>
              <Image
                className={contact.svg}
                src="/img/contactPage.svg"
                width={500}
                height={500}
                alt="mail image"
              />
            </div>

            <div className={contact.contactRight}>
              <p>
                I&apos;m always open to discussing product
                <br />
                <span>design work or partnerships.</span>
              </p>
              <ContactForm />
            </div>
          </div>{" "}
        </div>

        <HeroBg theme="bg-color-1" />
      </Container>
    </Section>
  );
}
