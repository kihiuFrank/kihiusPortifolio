import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";
import SectionTitle from "../../blocks/section.title.block";

import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/articles/recent.module.scss";

import { FaArrowUpRightFromSquare, FaMedium } from "react-icons/fa6";

export default function Recent({ mediumArticles }) {
  const feed = mediumArticles.feed;
  const articles = mediumArticles.items;

  return (
    <Section classProp="borderBottom">
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Recent Articles"
          preTitle="Informative"
          subTitle="Here are my recent articles where I share my experiences and things I have learnt over time."
        />
        <section className={css.projects}>
          {articles.map(
            (
              { title, pubDate, link, author, thumbnail, categories },
              index
            ) => {
              const date = new Date(pubDate).toDateString();
              return (
                <article key={index} className={css.project}>
                  <span className={css.featuredImage}>
                    <img src={thumbnail} alt="Article thumbnail" />
                  </span>
                  <span className={css.header}>
                    <a href={link} rel="noreferrer" target="_blank">
                      {title} <FaArrowUpRightFromSquare />
                    </a>
                  </span>
                  <span className={css.descriptionContainer}></span>
                  <span className={css.details}>
                    <p>By {author}</p>
                    <p className={css.pushedAt}>{date}</p>
                  </span>
                  <span className={css.topicsContainer}>
                    {categories.map((e, index) => {
                      return (
                        <span key={index} className={css.topics}>
                          <FaMedium /> {e}
                        </span>
                      );
                    })}
                  </span>
                </article>
              );
            }
          )}
        </section>
      </Container>
    </Section>
  );
}
