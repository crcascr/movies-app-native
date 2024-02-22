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
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

function SearchBar({ darkMode, setDarkMode }) {
  const ios = Platform.OS === "ios";

  const navigation = useNavigation();

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
      marginLeft: 130,
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
        <Text style={styles.logoName}>
          <Text style={{ color: "#eab308" }}>M</Text>ovies
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search", { darkMode: darkMode })}>
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
