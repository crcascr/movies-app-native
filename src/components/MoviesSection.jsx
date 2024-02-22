import React, { useEffect, useState } from "react";
import { ScrollView, Text, Dimensions, View } from "react-native";

import TrendingMovies from "./TrendingMovies";
import Movies from "./Movies";
import Loading from "./Loading";
import { fetchTrendingMovies, fetchUpcomingMovies } from "../api/MovieDB";

var { width, height } = Dimensions.get("window");

function MoviesSection({ darkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  const [trendingMovies, setTrendingMovies] = useState([
    { number: 1, name: "Beekeeper" },
    { number: 2, name: "Bob Marley: One Love" },
    { number: 3, name: "The Boy and the Heron" },
  ]);
  const [upcomingMovies, setUpcomingMovies] = useState([
    { number: 1, title: "Inside Out 2" },
    { number: 2, title: "Deadpool & Wolverine" },
    { number: 3, title: "Godzilla x Kong: The New Empire" },
  ]);
  const [topRatedMovies, setTopRatedMovies] = useState([
    { number: 1, title: "Oppenheimer" },
    { number: 2, title: "Bob Marley: One Love" },
    { number: 3, title: "Barbie" },
  ]);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
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
          {trendingMovies.length > 0 && (
            <TrendingMovies
              darkMode={darkMode}
              trendingMovies={trendingMovies}
              width={width}
              height={height}
            />
          )}
          {/* Trending Movies Section end />*/}

          {/* Upcoming Movies Section start />*/}
          {upcomingMovies.length > 0 && (
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
          {/*<Movies
            darkMode={darkMode}
            Movies={topRatedMovies}
            width={width}
            height={height}
            title={"Top Rated"}
            seeAllMovies={true}
          />}
          {/* Top Rated Movies Section end />*/}
        </View>
      )}
    </ScrollView>
  );
}

export default MoviesSection;
