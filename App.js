import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screen/Dashboard";
import Overview from "./screen/Overview";
import TagScreen from "./screen/TagScreen";
import Grid from "./component/grid/Grid";
import { isAliveToken } from "./utils/testToken";
import React from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  let token = isAliveToken();

  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Overview" component={Overview} />
          <Stack.Screen name="TagScreen" component={TagScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Overview" component={Overview} />
          <Stack.Screen name="TagScreen" component={TagScreen} />
        </Stack.Navigator>
      )}
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
