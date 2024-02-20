import React from "react";
import { ScrollView,Text } from "react-native";

function MoviesSection({ darkMode }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
        {/* Trending Movies Section start />*/}
        <Text>Trending Movies</Text>
        {/* Trending Movies Section end />*/}
    </ScrollView>
  );
}

export default MoviesSection;
