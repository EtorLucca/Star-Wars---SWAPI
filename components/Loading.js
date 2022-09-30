import React from "react";
import styles from "../styles/Loading.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faCircleNotch} className={`${styles.loader} fa-spin`} />
      <h1 className={styles.title}>Carregando... Aguarde</h1>
    </div>
  );
}
