import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../Component/MovieList";
import Pagination from "../Component/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  

  useEffect(() => {
  
    fetchMovies("popular", currentPage)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setError(null);
      })
  }, [currentPage]);

  return (
    <div>
      <h1 className="text-muted">All Movies</h1>
      <MovieList movies={movies}/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
