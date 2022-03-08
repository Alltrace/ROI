import React from "react";
import { StackActions } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { SafeAreaView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Grid from "../component/grid/Grid";
import Overview from "./Overview";
import TagScreen from "./TagScreen";
import { useNavigation } from "@react-navigation/native";
import { UUID } from "../constant/constant";
import * as SecureStore from "expo-secure-store";
import Login from "./Login";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Grid />
      <Button
        style={styles.buttonPadding}
        icon="login"
        mode="contained"
        onPress={async () => {
          // const res = await SecureStore.deleteItemAsync(UUID);
          console.log(res, "logout res");
          // navigation.navigate("Login", { screen: "Login" });
        }}
      >
        Logout
      </Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonPadding: {
    backgroundColor: "#6c65df",
    padding: 8,
    borderRadius: 15,

    margin: 15,
  },
});
export default Dashboard;
