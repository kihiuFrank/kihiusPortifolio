import React from "react";
import Image from "next/image";
import css from "../../../styles/sections/index/spinner.module.scss";
const Spinner = () => {
  return (
    <div className={css.main}>
      <Image
        width={100}
        height={100}
        src="/img/loader.svg"
        alt="loader"
        className={css.img}
      />
      <p>
        Loading in progress <br /> Please wait...
      </p>
    </div>
  );
};
export default Spinner;
