import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screen/Dashboard";
import Overview from "./screen/Overview";
import TagScreen from "./screen/TagScreen";
import Grid from "./component/grid/Grid";
import { isAliveToken } from "./utils/utils";
import React from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(async () => {
    setLoggedIn(await isAliveToken());
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="TagScreen" component={TagScreen} />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="TagScreen" component={TagScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
