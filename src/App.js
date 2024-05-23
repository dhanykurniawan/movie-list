import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [popularMovies, setPopoularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopoularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    if (!popularMovies || popularMovies.length === 0) {
      return <div>No popular movies available</div>;
    }

    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-date">release: {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log(q);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE</h1>
        <input
          placeholder="cari film kesayangan..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
