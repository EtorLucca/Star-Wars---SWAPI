import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({ onSearch }) {

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
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          // onKeyUp={(e) => {
          //   if(e.keyCode == 13) {
          //     onSearch(query);
          //   }
          // }}
        ></input>
      </div>
    </header>
  );
}
