import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "react-native-heroicons/outline";

function SearchBar({ darkMode, setDarkMode }) {
  const ios = Platform.OS === "ios";
  const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 4,
      flex: 1,
    },
    logoName: {
      fontWeight: "bold",
      fontSize: 30,
      color: darkMode ? "white" : "black",
      marginLeft: 20,
    },
  });

  return (
    <SafeAreaView
      style={{
        marginBottom: ios ? -2 : 3,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 4,
      }}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />
      <View style={styles.searchContainer}>
        <Bars3CenterLeftIcon
          size={30}
          strokeWidth={2}
          color={darkMode ? "white" : "black"}
        />
        <Text style={styles.logoName}>
          <Text style={{ color: "#eab308" }}>M</Text>ovies
        </Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon
            size={30}
            strokeWidth={2}
            color={darkMode ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 4 }}
        onPress={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <SunIcon size={30} strokeWidth={2} color={"white"} />
        ) : (
          <MoonIcon size={30} strokeWidth={2} color={"black"} />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SearchBar;
