import React from "react";
import styles from "../styles/Principal.module.css";
import CarouselMovies from "./CarouselMovies";
import CarouselChars from "./CarouselChars";

export default function Principal() {

  return (
    <main className={styles.container}>
      <section className={styles.sectionTitle}>
        <div className={styles.linha}>
          <span className={styles.titulo}>Movies</span>
        </div>

        <CarouselMovies />

      </section>
      <section className={styles.sectionTitle}>
        <div className={styles.linha}>
          <span className={styles.titulo}>Characters</span>
        </div>

        <CarouselChars />

      </section>
    </main>
  );
}