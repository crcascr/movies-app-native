import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
        navigation.push("Movie", { movie: movie, darkMode: darkMode })
      }
    >
      <View style={styles.movieCard}>
        <Image
          source={require("../assets/images/InsideOut2.jpg")}
          style={styles.movieImage}
        />
        <Text style={styles.movieTitle}>
          {movie.name.length > 22
            ? movie.name.slice(0, 22) + "..."
            : movie.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ResultCard;
