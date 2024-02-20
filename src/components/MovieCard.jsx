import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
          source={require("../assets/images/InsideOut2.jpg")}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>
          {Movie.name.length > 14
            ? Movie.name.slice(0, 14) + "..."
            : Movie.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MovieCard;
