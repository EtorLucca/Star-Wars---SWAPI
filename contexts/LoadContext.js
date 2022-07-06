import React, { useState, useEffect, createContext } from "react";
import { getMovies, getChars} from "../services/api";

export const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [charsData, setCharsData] = useState([]);
  const [imgData, setImgData] = useState([]);

  const loadData = async () => {
    try {
      setLoading(true);
      var resMovies = await getMovies();
      var resChars = await getChars();
      setMovieData(resMovies.data.results);
      setCharsData(resChars);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

    (async () => await loadData())();

    fetch("https://ojourlfake.glitch.me")
    .then((res) => res.json())
    .then(setImgData);

  }, []);

  return (
    <LoadContext.Provider
      value={{
        movieData,
        charsData,
        imgData,
        loading,
      }}
    >
      {children}
    </LoadContext.Provider>
  );
};
