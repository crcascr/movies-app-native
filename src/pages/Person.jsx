import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
import {
  fetchPersonDetails,
  fetchPersonMovies,
  getMoviePoster342,
} from "../api/MovieDB";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

function Person() {
  const { params } = useRoute();
  const { personId } = params;
  const { darkMode } = params;

  const navigation = useNavigation();

  const [favoritePerson, setFavoritePerson] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [personDetails, setPersonDetails] = useState(null);

  const [personMovies, setPersonMovies] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    //Call to the API
    getPersonDetails(personId);
    getPersonMovies(personId);
  }, [personId]);

  async function getPersonDetails(personId) {
    const data = await fetchPersonDetails(personId);
    if (data) {
      setPersonDetails(data);
      setIsLoading(false);
    }
  }

  async function getPersonMovies(personId) {
    const data = await fetchPersonMovies(personId);
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }
  }

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

  let genderLabel;
  var genderValue = personDetails?.gender;
  if (genderValue === 0) {
    genderLabel = "Not set";
  } else if (genderValue === 1) {
    genderLabel = "Female";
  } else if (genderValue === 2) {
    genderLabel = "Male";
  } else if (genderValue === 3) {
    genderLabel = "Non-binary";
  } else {
    genderLabel = "Unknown";
  }

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
        personDetails && (
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
                    //source={require("../assets/images/Jason-Statham.jpg")}
                    source={{
                      uri: getMoviePoster342(personDetails.profile_path),
                    }}
                    style={styles.personImage}
                  />
                </View>
              </Shadow>
            </View>
            <View>
              <Text style={styles.personName}>{personDetails.name}</Text>
              <Text style={styles.personLocation}>
                {personDetails.place_of_birth}
              </Text>
            </View>
            <View style={styles.personDetailedInfoContainer}>
              <PersonDetailedInfo
                title="Gender"
                data={genderLabel}
                darkMode={darkMode}
              />
              <PersonDetailedInfo
                title="Birthday"
                data={personDetails.birthday}
                darkMode={darkMode}
              />
              <PersonDetailedInfo
                title="Know For"
                data={personDetails.known_for_department}
                darkMode={darkMode}
              />
              <PersonDetailedInfo
                title="Popularity"
                data={personDetails.popularity}
                darkMode={darkMode}
                noBorder={true}
              />
            </View>
            <View style={styles.biographyContainer}>
              <Text style={styles.biographyTitle}>Biography</Text>
              <Text style={styles.biographyText}>
                {personDetails.biography}
              </Text>
            </View>
          </View>
        )
      )}
      {/* Person details end */}

      {/*Person movies start*/}
      {personMovies && personDetails && (
        <View style={styles.personMoviesContainer}>
          {
            <Movies
              darkMode={darkMode}
              Movies={personMovies}
              width={width}
              height={height}
              title={personDetails.name + "'s Movies"}
              seeAllMovies={false}
            />
          }
        </View>
      )}
      {/*Person movies end*/}
    </ScrollView>
  );
}

export default Person;
