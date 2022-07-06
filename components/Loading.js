import React from "react";
import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
        <div className={styles.container}>
         <h1 className={styles.title}>Carregando... Aguarde</h1>
        </div>
  );
}
