import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Person from "../pages/Person";
import Search from "../pages/Search";
import AllMovies from "../pages/AllMovies";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={Movie}
        />
        <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={Person}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={Search}
        />
        <Stack.Screen
          name="AllMovies"
          options={{ headerShown: false }}
          component={AllMovies}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation;