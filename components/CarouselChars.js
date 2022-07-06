import React, { useRef, useContext } from "react";
import Image from "next/image";
import { LoadContext } from "../contexts/LoadContext";
import styles from "../styles/CarouselChars.module.css";

export default function CarouselChars() {
  const { charsData } = useContext(LoadContext);
  const carousel = useRef(null);
  const sliderChar = useRef(null);

  var direction;
  let chars = charsData;

  function handleLeftClick(e) {
    e.preventDefault();
    direction = 1;
    sliderChar.current.prepend(sliderChar.current.lastElementChild);
  }

  function handleRightClick(e) {
    e.preventDefault();
    direction = -1;
    sliderChar.current.appendChild(sliderChar.current.firstElementChild);
  }

  return (
    <div className={styles.wrapperChar}>
      <div>
        <button className={styles.btnCarousel} onClick={handleLeftClick}>
          <Image className={styles.leftArrow} src="/static/seta.svg" />
        </button>
      </div>
      <div className={styles.carouselChar} ref={carousel}>
        <div className={styles.slider} ref={sliderChar}>
          {chars?.map((char) => {
            const { name, birth_year, height } = char;
            return (
              <div className={styles.card} key={name}>
                <div className={styles.data}>
                  <div className={styles.charTitle}>{name}</div>
                  <p className={styles.dataTitle}>Ano de Nascimento</p>
                  <p className={styles.dataChar}>{birth_year}</p>
                  <p className={styles.dataTitle}>Altura</p>
                  <p className={styles.dataChar}>{height / 100} m</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button className={styles.btnCarousel} onClick={handleRightClick}>
          <Image src="/static/seta.svg" />
        </button>
      </div>
    </div>
  );
}
