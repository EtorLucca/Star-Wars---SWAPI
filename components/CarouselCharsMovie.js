import React, { useRef } from "react";
import Image from "next/image";
import styles from "../styles/CarouselCharsMovie.module.css";

export default function CarouselCharsMovie(props) {
  const carousel = useRef(null);
  const sliderChar = useRef(null);

  let charsMovie = props?.chars;

  var direction = 1;

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
          <Image className={styles.leftArrow} src="/static/seta.svg" width="56px" height="56px"/>
        </button>
      </div>
      <div className={styles.carouselChar} ref={carousel}>
        <div className={styles.slider} ref={sliderChar}>
          {charsMovie?.map((char) => {
            const { name, birth_year, height } = char;
            return (
              <div className={styles.card} key={name}>
                <div className={styles.data}>
                  <div className={styles.charTitle}>{name}</div>
                  <p className={styles.dataTitle}>Year of Birth</p>
                  <p className={styles.dataChar}>{birth_year}</p>
                  <p className={styles.dataTitle}>Height</p>
                  <p className={styles.dataChar}>{height / 100} m</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button className={styles.btnCarousel} onClick={handleRightClick}>
          <Image src="/static/seta.svg" width="56px" height="56px" />
        </button>
      </div>
    </div>
  );
}
