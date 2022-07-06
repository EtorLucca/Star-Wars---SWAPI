import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a className={styles.title}>Star Wars Universe</a>
        <input
          placeholder="Pesquisar personagens"
          className={styles.search}
          type="text"
          name="query"
          id="query"
        ></input>
      </div>
    </header>
  );
}
