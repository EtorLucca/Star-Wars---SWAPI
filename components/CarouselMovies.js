import React, { useRef, useContext } from 'react';
import { LoadContext } from '../contexts/LoadContext';
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
      <div><button className={styles.btnCarousel} onClick={handleLeftClick}><img className={styles.leftArrow} src="/static/seta.svg" /></button></div>
      <div key="carousel" className={styles.carouselMovie} ref={carousel}>
        <div id="slider" key="slider" className={styles.slider} ref={sliderMovie}>
          {imgData.map((item) => {
            const {epi_id, src} = item;
            var film = movies?.find(obj => {return obj.episode_id == epi_id});
            return (
              <Link href={`/details/${epi_id}`} key={epi_id}>
                <div className={styles.item}>
                  <img className={styles.img} src={src} alt={`Episode ${epi_id}`} />
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
      <div><button className={styles.btnCarousel} onClick={handleRightClick}><img src="/static/seta.svg" /></button></div>
    </div>
  );
}
