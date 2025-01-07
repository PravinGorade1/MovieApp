import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate to programmatically navigate

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); // Navigate to the movie detail page with the movie's ID
  };

  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
