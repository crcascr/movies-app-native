import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import MovieCard from "./MovieCard";

var { width, height } = Dimensions.get("window");

function TrendingMovies({ darkMode, trendingMovies }) {
  const styles = StyleSheet.create({
    trendingContainer: {
      marginBottom: 8,
    },
    trendingTitle: {
      marginBottom: 5,
      marginHorizontal: 4,
      fontSize: 20,
      lineHeight: 28,
      color: darkMode ? "white" : "black",
    },
  });

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingTitle}>Trending</Text>
      <Carousel
        data={trendingMovies}
        renderItem={({ item }) => (
          <MovieCard
            width={width}
            height={height}
            darkMode={darkMode}
            movie={item}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

export default TrendingMovies;
