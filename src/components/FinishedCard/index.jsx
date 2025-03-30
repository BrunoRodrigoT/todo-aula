import React from "react";
import styles from "./styles.module.css";
export default function FinishedCard({ counter }) {
  return (
    <div className={styles.finishedCard}>
      <p>Tasks finalizadas</p>
      <h1>{counter}</h1>
    </div>
  );
}
