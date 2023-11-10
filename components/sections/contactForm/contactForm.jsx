import React, { useRef, useState } from "react";
import Section from "../../structure/section";
import Container from "../../structure/container";

import button from "../../../styles/blocks/button.module.scss";

import content from "../../../content/index/hero.json";
import { useRouter } from "next/router";

import { FaTelegramPlane } from "react-icons/fa";

import emailjs from "@emailjs/browser";

import Image from "next/image";

// Section scss
import contact from "../../../styles/sections/index/contact.module.scss";
import Spinner from "../spinner/Spinner";

export default function ContactForm() {
  const router = useRouter();
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_pdre476",
        "template_w59awid",
        form.current,
        "Q4rXb1kr4NJ4EG-SG"
      )
      .then(
        (result) => {
          // show the user a success message

          alert("Form submitted successfully.");

          console.log("form submitted successfully", result.text);

          router.push("/");
          setIsLoading(false);
        },
        (error) => {
          // show the user an error
          error("Error while submitting form, please try again");

          console.log("form submission failure", error.text);
        }
      );
  };
  return (
    <section className={contact.copy}>
      <form ref={form} onSubmit={sendEmail} className={contact.contactForm}>
        {isLoading && <Spinner />}
        <div className={contact.inputs}>
          <div className={contact.firstRow}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div className={contact.secondRow}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
          </div>

          <div className={contact.thirdRow}>
            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Message"
              required
            />
          </div>
        </div>
        <div className={contact.buttonDiv}>
          <button id="btn" className={contact.button} type="submit">
            {content.buttons.primary.title}
            <FaTelegramPlane />
          </button>
        </div>
      </form>
    </section>
  );
}
