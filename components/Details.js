import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LoadContext } from "../contexts/LoadContext";
import { createReview, getMovieChars } from "../services/api";
import styles from "../styles/Details.module.css";
import CarouselCharsMovie from "./CarouselCharsMovie";

export default function Details() {
  const { query } = useRouter();
  const { movieData, imgData } = useContext(LoadContext);
  const [charList, serCharList] = useState();

  let film = movieData?.find((obj) => {
    return obj.episode_id == query.id;
  });

  useEffect(() => {
    return () => getMovieChars(film?.characters).then(serCharList);
  });

  let image = imgData?.find((obj) => {
    return obj.epi_id == query.id;
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  async function SaveReview() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      episode_id: query.id,
      name,
      email,
      review,
    };

    const updatedReviews = [...reviews, newReview];

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    //----- Limpa Formulário após submit ----------------
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("review").value = "";
    setName("");
    setEmail("");
    setReview("");

    //------ Método POST --------------------------------
    await createReview(newReview, query.id); //Vai retornar erro 404 no console.
  }

  return (
    <main className={styles.container}>
      <section className={styles.sectionTitle}>
        <div className={styles.linha}>
          <span className={styles.titulo}>{film?.title}</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.data}>
            <div className={styles.descripion}>
              <h3 className={styles.title}>Description</h3>
              <p className={styles.text}>{film?.opening_crawl}</p>
            </div>
            <div className={styles.movieData}>
              <div className={styles.releaseDate}>
                <h3 className={styles.title}>Release Date</h3>
                <p className={styles.text}>{film?.release_date}</p>
              </div>
              <div className={styles.details}>
                <div className={styles.director}>
                  <h3 className={styles.title}>Director</h3>
                  <p className={styles.text}>{film?.director}</p>
                </div>
                <div className={styles.productor}>
                  <h3 className={styles.title}>Producer</h3>
                  <p className={styles.text}>{film?.producer}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={image?.src}
              width="336px"
              height="486px"
            />
          </div>
        </div>
      </section>
      <section className={styles.sectionTitle}>
        <div className={styles.linha}>
          <span className={styles.titulo}>Characters of the movie</span>
        </div>
        <CarouselCharsMovie chars={charList} />
      </section>
      <section className={styles.sectionTitle}>
        <div className={styles.linha}>
          <span className={styles.titulo}>Write a Review</span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            SaveReview();
          }}
          className={styles.form}
        >
          <div className={styles.separate}>
            <table>
              <tbody>
                <tr className={styles.tableTr}>
                  <td className={styles.tableTd}>
                    <label className={styles.label} htmlFor="name">
                      Your Name
                    </label>
                  </td>
                  <td className={styles.tableTd}>
                    <label className={styles.label} htmlFor="email">
                      Your E-Mail
                    </label>
                  </td>
                </tr>
                <tr className={styles.tableTr}>
                  <td className={styles.tableTd}>
                    <input
                      required
                      className={styles.input}
                      id="name"
                      type="string"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </td>
                  <td className={styles.tableTd}>
                    <input
                      required
                      className={styles.input}
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <label className={styles.label} htmlFor="review">
            Review
          </label>
          <textarea
            required
            className={styles.review}
            id="review"
            type="string"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <button type="submit" className={styles.publish}>
            Publish
          </button>
        </form>
      </section>
    </main>
  );
}
