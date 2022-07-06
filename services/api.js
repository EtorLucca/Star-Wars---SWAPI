import axios from "axios";

export const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const getMovies = async () => {
  let url = `/films/`;

  return api.get(url);
};

export const getChars = async () => {
  let url = `/people/`;
  let character;
  // await axios.get(urlChar)
  //   .then(characters => {
  //     characters.data.results.forEach(element => {
  //       character.push(element);
  //     })

  //     // if(characters.data.next) {
  //     //   getChars(characters.data.next);
  //     // }
  //   });
  // console.log(character)
  character = await api.get(url);

  return character.data.results;
};

export async function getMovieChars(charList) {
  let character = [];
  for (var i = 0; i < charList?.length; i++) {
    let teste = await api.get(charList[i]);
    character = character.concat(teste.data);

  }
  // console.log(character)
  return character;
};

export const createReview = async (newReview, ep_id) => {
  const url = `/reviews/${ep_id}`;

  return api
    .post(url, newReview)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
