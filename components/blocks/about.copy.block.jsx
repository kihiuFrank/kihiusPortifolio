// Util packages
import Icon from "../utils/icon.util";

// Utility packages
import space from "../utils/spacing.util";

import { FaEarListen } from "react-icons/fa6";

/**
 * About section component block that contains the written copy
 *
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ]
 * @param {string} 	title to be displayed
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({ containerClass, iconClass, title, copy }) {
  return (
    <>
      <div className={containerClass}>
        <span className={iconClass}>
          <FaEarListen />
        </span>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </>
  );
}
