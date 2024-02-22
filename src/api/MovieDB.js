import axios from "axios";
import { apiKey } from "../constants/Constants";

//API endpoints start

//Base URL
const baseUrl = "https://api.themoviedb.org/3";

//Trending movies
const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;

//Upcoming movies
const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;

//Top rated movies
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;

//Movie details
const movieDetailsEndpoint = (movie_id) =>
  `${baseUrl}/movie/${movie_id}?api_key=${apiKey}`;

//Movie credits
const movieCreditsEndpoint = (movie_id) =>
  `${baseUrl}/movie/${movie_id}/credits?api_key=${apiKey}`;

//Similar movies
const similarMoviesEndpoint = (movie_id) =>
  `${baseUrl}/movie/${movie_id}/similar?api_key=${apiKey}`;

//Person details
const personDetailsEndpoint = (person_id) =>
  `${baseUrl}/person/${person_id}?api_key=${apiKey}`;

//Person movies
const personMoviesEndpoint = (person_id) =>
  `${baseUrl}/person/${person_id}/movie_credits?api_key=${apiKey}`;

//Movie search
const movieSearchEndpoint = (query) =>
  `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`;

//API endpoints end

//API call setup start
const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    return {};
  }
};

//API call setup end

//API calls start

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = (movie_id) => {
  return apiCall(movieDetailsEndpoint(movie_id));
};

export const fetchMovieCredits = (movie_id) => {
  return apiCall(movieCreditsEndpoint(movie_id));
};

export const fetchSimilarMovies = (movie_id) => {
  return apiCall(similarMoviesEndpoint(movie_id));
};

export const fetchPersonDetails = (person_id) => {
  return apiCall(personDetailsEndpoint(person_id));
}

export const fetchPersonMovies = (person_id) => {
  return apiCall(personMoviesEndpoint(person_id));
}

export const fetchMovieSearch = (query) => {
  return apiCall(movieSearchEndpoint(query));
}

//API calls end

//Get movie poster start

// Width 500px
export const getMoviePoster500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

//Width 342px
export const getMoviePoster342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;

//Width 185px
export const getMoviePoster185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

//Get movie poster end

export const fallbackMoviePoster =
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Computer_screen_icon_white.png";
export const fallbackPersonImage =
  "https://louisville.edu/enrollmentmanagement/images/person-icon/image";
