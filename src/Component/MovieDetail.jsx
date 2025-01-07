import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for getting the movie ID from the URL
import { fetchMovieDetails } from "../api"; // Function to fetch movie details

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details when the component mounts
    fetchMovieDetails(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{movie.title}</h1>
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
