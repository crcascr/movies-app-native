import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import MoviesSection from "../components/MoviesSection";
import Loading from "../components/Loading";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour >= 18 || currentHour < 6) {
      setDarkMode(true);
    }
  }, []);

  const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      backgroundColor: darkMode ? "#262626" : "#94a3b8",
    },
  });

  return (
    <View style={styles.homeContainer}>
      {/*SearchBar and Logo Section start />*/}
      <SearchBar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/*SearchBar and Logo Section end />*/}

      {/*Movies Section start />*/}
      {isLoading ? <Loading /> : <MoviesSection darkMode={darkMode} />}
      {/*Movies Section end />*/}
    </View>
  );
}

export default Home;
