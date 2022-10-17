import React from "react";
// import "./Text.css";
import styles from "./Text.module.scss";

function Text({ news, setOneNews }) {
  return (
    <ul className={`${styles.ul} ${styles.sansSerif}`}>
      {news &&
        news.length > 0 &&
        news.map((item, index) => (
          <li
            onClick={() => setOneNews(item)}
            key={`${item.category}-${index}`}
            className={styles.li}
          >
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </li>
        ))}
    </ul>
  );
}

export default Text;
