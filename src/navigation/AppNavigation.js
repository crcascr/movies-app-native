import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Person from "../pages/Person";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation;