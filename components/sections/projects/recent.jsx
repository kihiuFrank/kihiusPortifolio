// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

import Image from "next/image";

import Icon from "../../utils/icon.util";

import css from "../../../styles/sections/projects/recent.module.scss";

import {
  FaArrowUpRightFromSquare,
  FaStar,
  FaCodeBranch,FaArrowRightToBracket
} from "react-icons/fa6";

export default function GitProjects({ repos, user }) {
  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={"verticalXXXLrg"}>
        <h3>Recent Projects</h3>
        <section className={css.profile}>
          <Image
            className={css.profilePhoto}
            src={`${user[0].avatar_url}`}
            alt="Github Profile Photo"
            height={60}
            width={60}
          />
          <span className={css.details}>
            <p>{user[0].name}</p>
            <a href={user[0].html_url} rel="noreferrer" target="_blank">
              {user[0].html_url} <FaArrowUpRightFromSquare />
            </a>
          </span>
        </section>
        <div className={css.projects}>
          {repos.map(
            ({
              id,
              name,
              description,
              topics,
              forks_count,
              html_url,
              language,
              watchers,
              homepage,
              pushed_at,
            }) => {
              const date = new Date(pushed_at).toDateString();
              return (
                <>
                  <article key={id} className={css.project}>
                    <span className={css.header}>
                      <a href={html_url} rel="noreferrer" target="_blank">
                        {name} <FaArrowUpRightFromSquare />
                      </a>
                      <p className={css.homepage}>{homepage}</p>
                    </span>
                    <span className={css.descriptionContainer}>
                      <p className={css.description}>{description}</p>
                    </span>
                    <span className={css.details}>
                      <p>
                        <i
                          className={`devicon-${(
                            language || ""
                          ).toLowerCase()}-plain colored`}
                        />{" "}
                        {language}
                      </p>
                      <>
                        <FaStar /> {watchers}
                      </>
                      <>
                        <FaCodeBranch /> {forks_count}
                      </>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {topics.map((e, index) => {
                        return (
                          <span key={index} className={css.topics}>
                            <i className="devicon-github-plain"></i> {e}
                          </span>
                        );
                      })}
                    </span>
                  </article>
                </>
              );
            }
          )}
        </div>
        {/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(repos, undefined, 2) }</pre>
				*/}
      </Container>
    </Section>
  );
}
