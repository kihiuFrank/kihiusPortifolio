import { useState, useEffect } from "react";

import {
  BsFillArrowRightCircleFill,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsBoxArrowUpRight,
} from "react-icons/bs";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Container from "../structure/container";
import Icon from "../utils/icon.util";

import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";
import Link from "next/link";

export default function Footer() {
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch(settings.portfolio.repo_api)
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className={css.container}>
      <Container spacing={["verticalXXLrg", "bottomLrg"]}>
        <section className={css.sections}>
          <ul className={css.links}>
            <li>
              <h4>Links</h4>
            </li>
            {content.link.map(({ name, link, note }, index) => {
              return (
                <li key={index}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {name} <FaArrowUpRightFromSquare />
                  </a>
                  <p>{note}</p>
                </li>
              );
            })}
          </ul>
          <ul className={css.more}>
            <li>
              {" "}
              <h4>More</h4>
            </li>

            <div className={css.footerLinks}>
              {content.links.map(({ url, title }, index) => {
                return (
                  <li key={index}>
                    <Link href={url}>{title}</Link>
                  </li>
                );
              })}
            </div>
          </ul>

          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <ul className={css.socialList}>
              <a href="https://github.com/kihiuFrank">
                <BsGithub />
              </a>
              <a href="https://twitter.com/frankline_kihiu">
                <BsTwitter />
              </a>
              <a href="https://www.linkedin.com/in/frankline-m-kihiu/">
                <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/frankline_kihiu/">
                <BsInstagram />
              </a>
            </ul>
          </ul>
        </section>
        <section className={css.github}>
          <a
            href={settings.portfolio.repo_html}
            rel="noreferrer"
            target="_blank"
          >
            <p>
              <span id="updateYourYearPLZ">
                Copyright @{new Date().getFullYear()} by Frankline Kihiu. All
                rights reserved.
              </span>
            </p>
          </a>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={""} data-transition-in></canvas>
    </footer>
  );
}
