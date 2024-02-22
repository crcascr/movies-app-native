import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import ResultCard from "../components/ResultCard";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

function AllMovies() {
  const { params } = useRoute();
  const { darkMode } = params;
  const { movies } = params;
  const { title } = params;

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    allMoviesContainer: {
      backgroundColor: darkMode ? "#262626" : "#94a3b8",
      flex: 1,
    },
    backButtonContainer: {
      zIndex: 20,
      width: width,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: ios ? 0 : 12,
      marginBottom: ios ? 0 : 12,
    },
    backButton: {
      padding: 4,
      borderRadius: 12,
      backgroundColor: "#eab308",
    },
    title: {
      color: darkMode ? "white" : "black",
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 28,
      marginRight: 60,
    },
    moviesView: {
      columnGap: 12,
    },
    moviesContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  });

  return (
    <SafeAreaView
      style={styles.allMoviesContainer}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back and favorite buttons start */}
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeftIcon
            size={28}
            strokeWidth={2.5}
            color={darkMode ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={styles.title}>All {title.toLowerCase()} movies</Text>
      </View>
      {/* Back and favorite buttons end */}
      <ScrollView
        style={styles.moviesView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <View style={styles.moviesContainer}>
          {movies.map((movie, index) => (
            <ResultCard
              key={index}
              darkMode={darkMode}
              movie={movie}
              index={index}
              width={width}
              height={height}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AllMovies;
