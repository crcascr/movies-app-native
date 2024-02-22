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
