import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("window");

function Loading() {
  const styles = StyleSheet.create({
    loadingContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: height*0.5,
      width: width,
    },
  });

  return (
    <View style={styles.loadingContainer}>
      <Progress.CircleSnail
        thickness={8}
        size={180}
        color={["yellow", "blue", "red", "green"]}
        spinDuration={3000}
      />
    </View>
  );
}

export default Loading;
