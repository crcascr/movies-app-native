import React, { useState } from "react";
import { ScrollView, Text } from "react-native";

import TrendingMovies from "./TrendingMovies";

function MoviesSection({ darkMode }) {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {/* Trending Movies Section start />*/}
      <TrendingMovies darkMode={darkMode} trendingMovies={trendingMovies} />
      {/* Trending Movies Section end />*/}
    </ScrollView>
  );
}

export default MoviesSection;
