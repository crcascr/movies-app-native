import React, { useEffect, useState } from "react";
import { ScrollView, Text, Dimensions, View } from "react-native";

import TrendingMovies from "./TrendingMovies";
import Movies from "./Movies";
import Loading from "./Loading";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/MovieDB";

var { width, height } = Dimensions.get("window");

function MoviesSection({ darkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  async function getTrendingMovies() {
    const data = await fetchTrendingMovies();
    if (data && data.results) {
      setTrendingMovies(data.results);
      setIsLoading(false);
    }
  }

  async function getUpcomingMovies() {
    const data = await fetchUpcomingMovies();
    if (data && data.results) {
      setUpcomingMovies(data.results);
    }
  }

  async function getTopRatedMovies() {
    const data = await fetchTopRatedMovies();
    if (data && data.results) {
      setTopRatedMovies(data.results);
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          {/* Trending Movies Section start />*/}
          {trendingMovies && (
            <TrendingMovies
              darkMode={darkMode}
              trendingMovies={trendingMovies}
              width={width}
              height={height}
            />
          )}
          {/* Trending Movies Section end />*/}

          {/* Upcoming Movies Section start />*/}
          {upcomingMovies && (
            <Movies
              darkMode={darkMode}
              Movies={upcomingMovies}
              width={width}
              height={height}
              title={"Upcoming"}
              seeAllMovies={true}
            />
          )}
          {/* Upcoming Movies Section end />*/}

          {/* Top Rated Movies Section start />*/}
          {topRatedMovies && (
            <Movies
              darkMode={darkMode}
              Movies={topRatedMovies}
              width={width}
              height={height}
              title={"Top Rated"}
              seeAllMovies={true}
            />
          )}
          {/* Top Rated Movies Section end />*/}
        </View>
      )}
    </ScrollView>
  );
}

export default MoviesSection;
