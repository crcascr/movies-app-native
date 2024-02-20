import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CastCard({ darkMode, person, navigation }) {
  const styles = StyleSheet.create({
    castContainer: {
      marginRight: 16,
      alignItems: "center",
    },
    imageContainer: {
      overflow: "hidden",
      borderRadius: 9999,
      width: 80,
      height: 80,
      alignItems: "center",
      borderColor: "#737373",
      borderWidth: 1,
    },
    personImage: {
      borderRadius: 16,
      height: 96,
      width: 80,
    },
    personName: {
      color: darkMode ? "white" : "black",
      marginTop: 4,
      fontSize: 13,
      lineHeight: 16,
      fontWeight: "bold",
    },
    personCharacter: {
      color: darkMode ? "#a3a3a3" : "#404040",
      marginTop: 4,
      fontSize: 12,
      lineHeight: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.castContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.personImage}
          source={require("../assets/images/Jason-Statham.jpg")}
        />
      </View>
      <Text style={styles.personName}>
        {person.name.length > 10
          ? person.name.slice(0, 10) + "..."
          : person.name}
      </Text>
      <Text style={styles.personCharacter}>
        {person.character.length > 10
          ? person.character.slice(0, 10) + "..."
          : person.character}
      </Text>
    </TouchableOpacity>
  );
}

export default CastCard;
