import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CastCard from "./CastCard";

function Cast({ darkMode, cast, navigation }) {
  const styles = StyleSheet.create({
    castContainer: {
      marginVertical: 24,
      marginHorizontal: 16,
    },
    castTitle: {
      color: darkMode ? "white" : "black",
      fontSize: 18,
      lineHeight: 28,
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.castContainer}>
      <Text style={styles.castTitle}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <CastCard
                key={index}
                darkMode={darkMode}
                person={person}
                navigation={navigation}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}

export default Cast;
