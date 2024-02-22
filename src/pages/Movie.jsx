import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import Loading from "../components/Loading";

import Cast from "../components/Cast";
import Movies from "../components/Movies";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

function Movie() {
  const { params } = useRoute();
  const { movie } = params;
  const { darkMode } = params;

  const navigation = useNavigation();

  const [favorite, setFavorite] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [cast, setCast] = useState([
    { name: "Jason Statham", character: "Adam Clay" },
    { name: "Emmy Raver-Lampman", character: "Agent Verona Parker" },
    { name: "Bobby Naderi", character: "Agent Matt Wiley" },
    { name: "Josh Hutcherson", character: "Derek Danforth" },
    { name: "Jeremy Irons", character: "Wallace Westwyld" },
    { name: "Taylor James", character: "Lazarus" },
    { name: "Phylicia Rashād", character: "Eloise Parker" },
    { name: "Jemma Redgrave", character: "President Jessica Danforth" },
    { name: "Minnie Driver", character: "Director Janet Hayworth" },
  ]);

  const [similarMovies, setSimilarMovies] = useState([
    { number: 1, name: "The Transporter" },
    { number: 2, name: "John Wick" },
    { number: 3, name: "V For Vendetta" },
  ]);

  useEffect(() => {
    //Call to the API
  }, [movie]);

  const styles = StyleSheet.create({
    movieContainer: {
      flex: 1,
      backgroundColor: darkMode ? "#262626" : "#94a3b8",
    },
    movieNavContainer: {
      width: width,
    },
    movieImageContainer: {
      position: "absolute",
      zIndex: 20,
      width: width,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: ios ? 0 : 12,
    },
    backButton: {
      padding: 4,
      borderRadius: 12,
      backgroundColor: "#eab308",
    },
    movieImage: {
      width: width,
      height: height * 0.55,
    },
    movieDetailsContainer: {
      marginTop: -(height * 0.04),
      columnGap: 12,
    },
    movieInfoContainer: {
      display: isLoading ? "none" : "flex",
    },
    movieTitle: {
      textAlign: "center",
      fontWeight: "bold",
      color: darkMode ? "white" : "black",
      fontSize: 30,
      lineHeight: 36,
      letterSpacing: 0.4,
    },
    movieGeneralInfo: {
      textAlign: "center",
      color: darkMode ? "#a3a3a3" : "#323232",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 24,
    },
    movieGenres: {
      flexDirection: "row",
      justifyContent: "center",
      marginHorizontal: 16,
      rowGap: 8,
      marginTop: 8,
    },
    movieDescription: {
      color: darkMode ? "#a3a3a3" : "#323232",
      letterSpacing: 0.4,
      marginTop: 8,
      marginHorizontal: 16,
      textAlign: "justify",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.movieContainer}
    >
      <View style={styles.movieNavContainer}>
        <SafeAreaView style={styles.movieImageContainer}>
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
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            {favorite ? (
              <HeartIconSolid size={35} color={darkMode ? "white" : "black"} />
            ) : (
              <HeartIcon size={35} color={darkMode ? "white" : "black"} />
            )}
          </TouchableOpacity>
        </SafeAreaView>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <Image
              style={styles.movieImage}
              source={require("../assets/images/beekeeper.jpg")}
            />
            <LinearGradient
              colors={[
                "transparent",
                darkMode ? "#26262699" : "#26262699",
                darkMode ? "#262626" : "#94a3b8",
              ]}
              style={{
                width: width,
                height: height * 0.4,
                bottom: 0,
                position: "absolute",
              }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        )}
      </View>
      <View style={styles.movieInfoContainer}>
        <View style={styles.movieDetailsContainer}>
          <Text style={styles.movieTitle}>{movie.name}</Text>
          <Text style={styles.movieGeneralInfo}>Released • 2024 • 105 min</Text>
          <View style={styles.movieGenres}>
            <Text style={styles.movieGeneralInfo}>Action • </Text>
            <Text style={styles.movieGeneralInfo}>Suspense • </Text>
            <Text style={styles.movieGeneralInfo}>Drama</Text>
          </View>
          <Text style={styles.movieDescription}>
            One man’s campaign for vengeance takes on national stakes after he
            is revealed to be a former operative of a powerful and clandestine
            organization known as Beekeepers.
          </Text>
        </View>
        <Cast darkMode={darkMode} cast={cast} navigation={navigation} />
        <Movies
          darkMode={darkMode}
          Movies={similarMovies}
          width={width}
          height={height}
          title={"Similar Movies"}
          seeAllMovies={false}
        />
      </View>
    </ScrollView>
  );
}
export default Movie;
