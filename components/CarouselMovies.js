import React, { useRef, useContext } from "react";
import Image from "next/image";
import { LoadContext } from "../contexts/LoadContext";
import Link from "next/link";
import styles from "../styles/CarouselMovies.module.css";

export default function CarouselMovies() {
  const { movieData, imgData } = useContext(LoadContext);
  const carousel = useRef(null);
  const sliderMovie = useRef(null);

  var direction;
  let movies = movieData;

  function handleLeftClick(e) {
    e.preventDefault();
    direction = 1;
    sliderMovie.current.prepend(sliderMovie.current.lastElementChild);
  }

  function handleRightClick(e) {
    e.preventDefault();
    direction = -1;
    sliderMovie.current.appendChild(sliderMovie.current.firstElementChild);
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.btnCarousel} onClick={handleLeftClick}>
          <Image
            className={styles.leftArrow}
            src="/static/seta.svg"
            width="56px"
            height="56px"
          />
        </button>
      </div>
      <div key="carousel" className={styles.carouselMovie} ref={carousel}>
        <div
          id="slider"
          key="slider"
          className={styles.slider}
          ref={sliderMovie}
        >
          {imgData.map((item) => {
            const { epi_id, src } = item;
            var film = movies?.find((obj) => {
              return obj.episode_id == epi_id;
            });
            return (
              <Link href={`/details/${epi_id}`} key={epi_id}>
                <div className={styles.item}>
                  <Image
                    className={styles.img}
                    src={src}
                    alt={`Episode ${epi_id}`}
                    width="268px"
                    height="352px"
                  />
                  <div className={styles.data}>
                    <div className={styles.movieTitle}>{film?.title}</div>
                    <p className={styles.dataTitle}>Data de Lançamento</p>
                    <p className={styles.dataMovie}>{film?.release_date}</p>
                    <p className={styles.dataTitle}>Diretor</p>
                    <p className={styles.dataMovie}>{film?.director}</p>
                  </div>
                </div>
              </Link>
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
