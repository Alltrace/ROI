import { StackActions } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { loginAPI } from "../service/api";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogin = async () => {
    try {
      const res = await loginAPI(email, password);
      if (res) {
        navigation.dispatch(StackActions.replace("Dashboard"));
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="User Name"
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />

      <Button title="Login" onPress={handleLogin} />
      <Button
        title="direct DASHBOARD"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
