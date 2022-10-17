import React from "react";
import styles from "./Single.module.scss";

const Single = ({ data }) => {
  return (
    <div className={styles.bg}>
      <h3>{data.title}</h3>
      <p>{data.info}</p>
    </div>
  );
};

export default Single;
