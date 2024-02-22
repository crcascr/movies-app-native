import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MovieCard from "./MovieCard";
import { useNavigation } from "@react-navigation/native";

function Movies({ darkMode, Movies, width, height, title, seeAllMovies }) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    sectionContainer: {
      marginBottom: 8,
      marginTop: 16,
    },
    titleContainer: {
      marginHorizontal: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    sectionTitle: {
      fontSize: 20,
      lineHeight: 28,
      color: darkMode ? "white" : "black",
    },
    seeAllText: {
      color: "#eab308",
      fontSize: 18,
      lineHeight: 28,
    },
  });

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {seeAllMovies && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllMovies", {
                movies: Movies,
                darkMode: darkMode,
                title: title,
              })
            }
          >
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {Movies.map((Movie, index) => {
          return (
            <MovieCard
              key={index}
              darkMode={darkMode}
              Movie={Movie}
              index={index}
              width={width}
              height={height}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Movies;
