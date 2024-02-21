import React from "react";
import { Text, View, StyleSheet } from "react-native";

function PersonDetailedInfo({ title, data, darkMode, noBorder }) {
  const styles = StyleSheet.create({
    detailContainer: {
      borderRightWidth: noBorder ? 0 : 2,
      borderRightColor: darkMode ? "#a3a3a3" : "#323232",
      paddingHorizontal: 10,
      alignItems: "center",
    },
    detailTitle: {
      color: darkMode ? "white" : "black",
      fontWeight: "600",
    },
    detailData: {
      color: darkMode ? "#a3a3a3" : "#323232",
      fontSize: 14,
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailData}>{data}</Text>
    </View>
  );
}

export default PersonDetailedInfo;