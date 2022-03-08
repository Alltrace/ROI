import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Grid from "../component/grid/Grid";
import Overview from "./Overview";
import TagScreen from "./TagScreen";

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Grid />
      <Button
        style={styles.buttonPadding}
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate("Dashboard")}
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
