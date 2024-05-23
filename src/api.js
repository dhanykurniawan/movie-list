import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
  //   console.log({ movieList: movie });
  return movie.data.result;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(q);
};
