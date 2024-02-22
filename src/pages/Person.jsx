import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import { Shadow } from "react-native-shadow-2";

import PersonDetailedInfo from "../components/PersonDetailedInfo";
import Movies from "../components/Movies";
import Loading from "../components/Loading";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

function Person() {
  const { params } = useRoute();
  const { person } = params;
  const { darkMode } = params;

  const navigation = useNavigation();

  const [favoritePerson, setFavoritePerson] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [personMovies, setPersonMovies] = useState([
    { number: 1, name: "The Transporter" },
    { number: 2, name: "Death Race" },
    { number: 3, name: "The Expendables" },
    { number: 4, name: "Crank" },
    { number: 5, name: "The Meg" },
  ]);

  const styles = StyleSheet.create({
    personContainer: {
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
    personBasicContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
    personImageContainer: {
      overflow: "hidden",
      borderRadius: 9999,
      alignItems: "center",
      height: 288,
      width: 288,
      borderColor: "#737373",
      borderWidth: 2,
      marginBottom: 20,
    },
    personImage: {
      height: height * 0.43,
      width: width * 0.74,
    },
    personName: {
      color: darkMode ? "white" : "black",
      fontSize: 30,
      lineHeight: 36,
      fontWeight: "bold",
      textAlign: "center",
    },
    personLocation: {
      textAlign: "center",
      color: darkMode ? "#a3a3a3" : "#323232",
      fontSize: 16,
      lineHeight: 24,
    },
    personDetailedInfoContainer: {
      marginHorizontal: 12,
      marginTop: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 9999,
      backgroundColor: darkMode ? "#404040" : "#828fa1",
      padding: 8,
    },
    biographyContainer: {
      marginTop: 24,
      marginHorizontal: 16,
      columnGap: 8,
    },
    biographyTitle: {
      color: darkMode ? "white" : "black",
      fontSize: 18,
      lineHeight: 28,
    },
    biographyText: {
      color: darkMode ? "#a3a3a3" : "#323232",
      textAlign: "justify",
    },
    personMoviesContainer: {
      marginHorizontal: 16,
      display: isLoading ? "none" : "flex",
    },
  });

  return (
    <ScrollView
      style={styles.personContainer}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back and favorite buttons start */}
      <SafeAreaView style={styles.backButtonContainer}>
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
        <TouchableOpacity onPress={() => setFavoritePerson(!favoritePerson)}>
          {favoritePerson ? (
            <HeartIconSolid size={35} color={"red"} />
          ) : (
            <HeartIcon size={35} color={darkMode ? "white" : "black"} />
          )}
        </TouchableOpacity>
      </SafeAreaView>
      {/* Back and favorite buttons end */}

      {/* Person details start */}
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <View style={styles.personBasicContainer}>
            <Shadow
              distance={20}
              startColor={"#737373"}
              endColor={"#73737300"}
              offset={[0, 0]}
            >
              <View style={styles.personImageContainer}>
                <Image
                  source={require("../assets/images/Jason-Statham.jpg")}
                  style={styles.personImage}
                />
              </View>
            </Shadow>
          </View>
          <View>
            <Text style={styles.personName}>{person}</Text>
            <Text style={styles.personLocation}>London, UK</Text>
          </View>
          <View style={styles.personDetailedInfoContainer}>
            <PersonDetailedInfo
              title="Gender"
              data="Male"
              darkMode={darkMode}
            />
            <PersonDetailedInfo
              title="Birthday"
              data="26/07/1967"
              darkMode={darkMode}
            />
            <PersonDetailedInfo
              title="Height"
              data="1.78 m"
              darkMode={darkMode}
            />
            <PersonDetailedInfo
              title="Popularity"
              data="76"
              darkMode={darkMode}
              noBorder={true}
            />
          </View>
          <View style={styles.biographyContainer}>
            <Text style={styles.biographyTitle}>Biography</Text>
            <Text style={styles.biographyText}>
              Jason Statham (born July 26, 1967) is an English actor. He is
              known for portraying characters in various action-thriller films
              who are typically tough, hardboiled, gritty, or violent.
            </Text>
          </View>
        </View>
      )}
      {/* Person details end */}

      {/*Person movies start*/}
      <View style={styles.personMoviesContainer}>
        <Movies
          darkMode={darkMode}
          Movies={personMovies}
          width={width}
          height={height}
          title={person + "'s Movies"}
          seeAllMovies={false}
        />
      </View>
      {/*Person movies end*/}
    </ScrollView>
  );
}

export default Person;
