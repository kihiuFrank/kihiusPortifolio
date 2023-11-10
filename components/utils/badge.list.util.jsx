import { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utility components
//import Icon from '../utils/icon.util.jsx'

import { LiaResearchgate } from "react-icons/lia";

/**
 * scss reference for utils should probably be pulled in from the first component under the section
 */
import badges from "../../styles/blocks/badges.module.scss";

export default function Badges({ list, block, color, fullContainer }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container = {
    hidden: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.025,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.025,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      y: 20,
      opacity: -0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <m.ul
      className={`${badges.list} ${badges[block]} ${badges[fullContainer]}`}
      //Animations
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {list.map(({ key, name }) => {
        return (
          <m.li
            key={name}
            className={`${badges.item} ${key}`}
            //Animations
            variants={item}
          >
            <LiaResearchgate />
            <span className={badges.title}>{name}</span>
          </m.li>
        );
      })}
    </m.ul>
  );
}
