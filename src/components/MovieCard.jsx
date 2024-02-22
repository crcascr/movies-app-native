import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fallbackMoviePoster, getMoviePoster185 } from "../api/MovieDB";

function MovieCard({ darkMode, Movie, index, width, height }) {
  const styles = StyleSheet.create({
    movieCard: {
      marginTop: 4,
      marginRight: 16,
    },
    movieImage: {
      borderRadius: 24,
      width: width * 0.33,
      height: height * 0.22,
    },
    movieTitle: {
      color: darkMode ? "white" : "black",
      textAlign: "center",
    },
  });

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      key={index}
      onPress={() =>
        navigation.push("Movie", { movie: Movie, darkMode: darkMode })
      }
    >
      <View style={styles.movieCard}>
        <Image
          //source={require("../assets/images/InsideOut2.jpg")}
          source={{
            uri: getMoviePoster185(Movie.poster_path) || fallbackMoviePoster,
          }}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>
          {Movie.title.length > 14
            ? Movie.title.slice(0, 14) + "..."
            : Movie.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MovieCard;
