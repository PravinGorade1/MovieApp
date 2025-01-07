import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../Component/MovieList";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("popular")
      .then((data) => {
        setMovies(data.results);
        setError(null);
      })
      .catch(() => setError("Failed to load popular movies"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Popular Movies</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default Popular;
