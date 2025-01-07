const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// Helper function for API calls
const apiRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${error.message}`);
    return null; // Return null or a fallback value
  }
};

// Fetch movies by type and page
export const fetchMovies = async (type = "popular", page = 1) => {
  const url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
  return await apiRequest(url);
};

// Fetch details of a single movie
export const fetchMovieDetails = async (movieId) => {
  if (!movieId) {
    console.error("fetchMovieDetails: Movie ID is required");
    return null;
  }
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return await apiRequest(url);
};

// Fetch credits for a specific movie
export const fetchMovieCredits = async (movieId) => {
  if (!movieId) {
    console.error("fetchMovieCredits: Movie ID is required");
    return null;
  }
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
  return await apiRequest(url);
};

// Search movies by query
export const searchMovies = async (query, page = 1) => {
  if (!query) {
    console.error("searchMovies: Search query is required");
    return null;
  }
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
  return await apiRequest(url);
};
