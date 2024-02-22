import React, { useEffect, useState } from "react";
import { ScrollView, Text, Dimensions, View } from "react-native";

import TrendingMovies from "./TrendingMovies";
import Movies from "./Movies";
import Loading from "./Loading";
import { fetchTrendingMovies } from "../api/MovieDB";

var { width, height } = Dimensions.get("window");

function MoviesSection({ darkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  const [trendingMovies, setTrendingMovies] = useState([
    { number: 1, name: "Beekeeper" },
    { number: 2, name: "Bob Marley: One Love" },
    { number: 3, name: "The Boy and the Heron" },
  ]);
  const [upcomingMovies, setUpcomingMovies] = useState([
    { number: 1, name: "Inside Out 2" },
    { number: 2, name: "Deadpool & Wolverine" },
    { number: 3, name: "Godzilla x Kong: The New Empire" },
  ]);
  const [topRatedMovies, setTopRatedMovies] = useState([
    { number: 1, name: "Oppenheimer" },
    { number: 2, name: "Bob Marley: One Love" },
    { number: 3, name: "Barbie" },
  ]);

  useEffect(() => {
    //getTrendingMovies()
  }, []);

  async function getTrendingMovies() {
    const data = await fetchTrendingMovies();
    console.log("Data:", data);
    if (data && data.results) {
      setTrendingMovies(data.results);
      setIsLoading(false);
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
          <Movies
            darkMode={darkMode}
            Movies={upcomingMovies}
            width={width}
            height={height}
            title={"Upcoming"}
            seeAllMovies={true}
          />
          {/* Upcoming Movies Section end />*/}

          {/* Top Rated Movies Section start />*/}
          <Movies
            darkMode={darkMode}
            Movies={topRatedMovies}
            width={width}
            height={height}
            title={"Top Rated"}
            seeAllMovies={true}
          />
          {/* Top Rated Movies Section end />*/}
        </View>
      )}
    </ScrollView>
  );
}

export default MoviesSection;
