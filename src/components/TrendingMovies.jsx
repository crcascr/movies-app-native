import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import TrendingMovieCard from "./TrendingMovieCard";
import { useNavigation } from "@react-navigation/native";

function TrendingMovies({ darkMode, trendingMovies, width, height }) {
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

  const navigation = useNavigation();
  const handleMoviePress = (movie, darkMode) => {
    navigation.navigate("Movie", { movie: movie, darkMode: darkMode });
  };

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingTitle}>Trending</Text>
      <Carousel
        data={trendingMovies}
        renderItem={({ item }) => (
          <TrendingMovieCard
            width={width}
            height={height}
            darkMode={darkMode}
            movie={item}
            handleMoviePress={handleMoviePress}
          />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

export default TrendingMovies;
