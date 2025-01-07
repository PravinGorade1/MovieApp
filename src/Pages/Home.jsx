import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../Component/MovieList";
import Pagination from "../Component/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("popular", currentPage)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setError(null);
      })
      .catch(() => setError("Failed to load movies"))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  return (
    <div>
      <h1>All Movies</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && <MovieList movies={movies} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
