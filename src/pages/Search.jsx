import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon, XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import ResultCard from "../components/ResultCard";
import Loading from "../components/Loading";

var { width, height } = Dimensions.get("window");

function Search() {
  const { params } = useRoute();
  const { darkMode } = params;

  const navigation = useNavigation();

  const [searchMovie, setSearchMovie] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([
    { number: 1, name: "John Wick: Chapter 4" },
    { number: 2, name: "Lift" },
    { number: 3, name: "The Family Plan" },
    { number: 4, name: "The Marvels" },
    { number: 5, name: "Meg 2: The Trench" },
    { number: 6, name: "Badland Hunters" },
    { number: 7, name: "Upgraded" },
    { number: 8, name: "Transformers: Rise of the Beasts" },
  ]);

  const styles = StyleSheet.create({
    mainSearch: {
      backgroundColor: darkMode ? "#262626" : "#94a3b8",
      flex: 1,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
    },
    backButton: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: "#eab308",
      marginBottom: 10,
      marginTop: 2,
    },
    searchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: 16,
      marginBottom: 12,
      borderRadius: 9999,
      borderWidth: 1,
      borderColor: darkMode ? "#a3a3a3" : "#737373",
      flex: 1,
    },
    searchField: {
      paddingBottom: 4,
      paddingLeft: 24,
      color: darkMode ? "white" : "black",
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "500",
      flex: 1,
    },
    cancelButton: {
      backgroundColor: darkMode ? "#a3a3a3" : "#737373",
      borderRadius: 9999,
      margin: 4,
      padding: 12,
    },
    searchResultsContainer: {
      columnGap: 12,
    },
    searchResultTitle: {
      color: darkMode ? "white" : "black",
      fontWeight: "600",
      marginLeft: 4,
      marginBottom: 12,
    },
    searchResult: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    noResultsContainer: {
      flexDirection: "column",
      justifyContent: "center",
      marginHorizontal: 16,
      alignItems: "center",
    },
    noResultsImage: {
      width: 300,
      height: 300,
    },
    noResultsText: {
      color: darkMode ? "white" : "black",
      textAlign: "center",
      fontWeight: "600",
      fontSize: 24,
    },
  });

  return (
    <SafeAreaView style={styles.mainSearch}>
      <View style={styles.searchBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={25} color={darkMode ? "white" : "black"} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Movie"
            placeholderTextColor={darkMode ? "#a3a3a3" : "#404040"}
            style={styles.searchField}
            value={searchMovie}
            onChangeText={setSearchMovie}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setSearchMovie("");
            }}
          >
            <XMarkIcon size={25} color={darkMode ? "white" : "black"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search Results */}
      {isLoading ? (
        <Loading />
      ) : searchResults.length > 0 ? (
        <ScrollView
          style={styles.searchResultsContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <Text style={styles.searchResultTitle}>
            Results ({searchResults.length})
          </Text>
          <View style={styles.searchResult}>
            {searchResults.map((movie, index) => (
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
      ) : (
        <View style={styles.noResultsContainer}>
          <Image
            source={require("../assets/images/noMovies.png")}
            style={styles.noResultsImage}
          />
          <Text style={styles.noResultsText}>No movies found 😓</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Search;
