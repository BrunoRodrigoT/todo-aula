import React from "react";
import styles from "./styles.module.css";

export default function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
