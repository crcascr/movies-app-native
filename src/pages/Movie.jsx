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
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  getMoviePoster500,
} from "../api/MovieDB";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

function Movie() {
  const { params } = useRoute();
  const { movie } = params;
  const { darkMode } = params;

  const navigation = useNavigation();

  const [favorite, setFavorite] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [cast, setCast] = useState(null);

  const [similarMovies, setSimilarMovies] = useState(null);

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    //Call to the API
    getMovieDetails(movie);
    getMovieCredits(movie);
    getSimilarMovies(movie);
  }, [movie]);

  async function getMovieDetails(movieId) {
    const data = await fetchMovieDetails(movieId);
    if (data) {
      setMovieDetails(data);
      setIsLoading(false);
    }
  }

  async function getMovieCredits(movieId) {
    const data = await fetchMovieCredits(movieId);
    if (data) {
      setCast(data.cast);
    }
  }

  async function getSimilarMovies(movieId) {
    const data = await fetchSimilarMovies(movieId);
    if (data) {
      setSimilarMovies(data.results);
    }
  }

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
      flexWrap: "wrap",
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
            {movieDetails && (
              <Image
                style={styles.movieImage}
                //source={require("../assets/images/beekeeper.jpg")}
                source={{ uri: getMoviePoster500(movieDetails.poster_path) }}
              />
            )}
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
      {movieDetails && (
        <View style={styles.movieInfoContainer}>
          <View style={styles.movieDetailsContainer}>
            <Text style={styles.movieTitle}>{movieDetails.title}</Text>
            <Text style={styles.movieGeneralInfo}>
              {movieDetails.status} • {movieDetails.release_date.split("-")[0]}{" "}
              • {movieDetails.runtime} min
            </Text>
            <View style={styles.movieGenres}>
              {movieDetails.genres.map((genre, index) => (
                <Text key={index} style={styles.movieGeneralInfo}>
                  {genre.name}{" "}
                  {index !== movieDetails.genres.length - 1 ? "• " : ""}
                </Text>
              ))}
            </View>
            <Text style={styles.movieDescription}>{movieDetails.overview}</Text>
          </View>
          {cast && (
            <Cast darkMode={darkMode} cast={cast} navigation={navigation} />
          )}
          {similarMovies && (
            <Movies
              darkMode={darkMode}
              Movies={similarMovies}
              width={width}
              height={height}
              title={"Similar Movies"}
              seeAllMovies={false}
            />
          )}
        </View>
      )}
    </ScrollView>
  );
}
export default Movie;
