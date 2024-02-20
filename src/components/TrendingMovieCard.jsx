import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
} from "react-native";

function TrendingMovieCard({ movie, darkMode, width, height }) {
  const styles = StyleSheet.create({
    moviePosterImage: {
      borderRadius: 24,
      width: width * 0.6,
      height: height * 0.4,
    },
  });
  return (
    <TouchableWithoutFeedback>
      <Image
        source={require("../assets/images/beekeeper.jpg")}
        style={styles.moviePosterImage}
      />
    </TouchableWithoutFeedback>
  );
}

export default TrendingMovieCard;
