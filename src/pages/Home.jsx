import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";
import MoviesSection from "../components/MoviesSection";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: darkMode ? "#262626" : "#94a3b8",
    },
  });

  return (
    <View style={styles.homeContainer}>
      {/*SearchBar and Logo Section start />*/}
      <SearchBar darkMode={darkMode} />
      {/*SearchBar and Logo Section end />*/}
      {/*Movies Section start />*/}
      <MoviesSection darkMode={darkMode} />
      {/*Movies Section end />*/}
    </View>
  );
}

export default Home;
