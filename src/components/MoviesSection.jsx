import React, { useState } from "react";
import { ScrollView, Text, Dimensions } from "react-native";

import TrendingMovies from "./TrendingMovies";
import Movies from "./Movies";

var { width, height } = Dimensions.get("window");

function MoviesSection({ darkMode }) {
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {/* Trending Movies Section start />*/}
      <TrendingMovies
        darkMode={darkMode}
        trendingMovies={trendingMovies}
        width={width}
        height={height}
      />
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
    </ScrollView>
  );
}

export default MoviesSection;
