import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button, Drawer } from "react-native-paper";
import Header from "../component/header/Header";
import Logo from "../component/logo/Logo";

import { loginAPI } from "../service/api";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogin = async () => {
    console.log(email, password, "input");
    const res = await loginAPI(email, password);
    console.log(res, "res");
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Header>welcome back</Header>
      <TextInput
        left={<TextInput.Icon name="email-outline" />}
        label="User ID"
        style={styles.input}
        mode="outlined"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        left={<TextInput.Icon name="lock-outline" />}
        label="Password"
        secureTextEntry={true}
        style={styles.input}
        mode="outlined"
        onChangeText={onChangePassword}
        value={password}
      />
      <Button
        style={styles.buttonPadding}
        icon="login"
        mode="contained"
        onPress={handleLogin}
      >
        Login
      </Button>

      <Button
        icon="login"
        mode="contained"
        style={styles.input}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Direct DASHBOARD
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 160,
    marginLeft: 18,
    marginRight: 18,
    width: "100%",

    maxWidth: 330,
  },

  input: {
    backgroundColor: "#e2e1f9",
    margin: "6%",
  },
  buttonPadding: {
    backgroundColor: "#6c65df",
    padding: 8,
    borderRadius: 15,
  },
});

export default Login;
