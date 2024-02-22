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

//Get fallback images start

export const fallbackMoviePoster =
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Computer_screen_icon_white.png";
export const fallbackPersonImage =
  "https://banner2.cleanpng.com/20180701/yig/kisspng-computer-icons-silhouette-my-account-icon-5b388d48343f50.355577991530432840214.jpg";
