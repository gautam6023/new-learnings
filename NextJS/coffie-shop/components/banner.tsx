import { NextComponentType } from "next";
import styles from "./banner.module.css";

type BannerTypes = {
  buttonText: string;
  handleClick: () => void;
};

const Banner = ({ buttonText, handleClick }: BannerTypes) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>{" "}
        <span className={styles.title2}>Connoissure</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
