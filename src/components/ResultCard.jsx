import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getMoviePoster342 } from "../api/MovieDB";

function ResultCard({ darkMode, movie, index, width, height }) {
  const styles = StyleSheet.create({
    movieCard: {
      marginBottom: 16,
      rowGap: 8,
    },
    movieImage: {
      borderRadius: 24,
      width: width * 0.44,
      height: height * 0.3,
    },
    movieTitle: {
      color: darkMode ? "white" : "black",
      textAlign: "center",
      marginLeft: 4,
    },
  });

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      key={index}
      onPress={() =>
        navigation.push("Movie", { movie: movie.id, darkMode: darkMode })
      }
    >
      <View style={styles.movieCard}>
        <Image
          //source={require("../assets/images/InsideOut2.jpg")}
          source={{ uri: getMoviePoster342(movie.poster_path) }}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>
          {movie.title.length > 22
            ? movie.title.slice(0, 22) + "..."
            : movie.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ResultCard;
