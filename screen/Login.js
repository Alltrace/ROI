import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button, Paragraph } from "react-native-paper";
import Header from "../component/header/Header";
import Logo from "../component/logo/Logo";

import { loginAPI } from "../service/api";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleLogin = async () => {
    try {
      const res = await loginAPI(email, password);
      if (res) {
        navigation.dispatch(StackActions.replace("Dashboard"));
      }
    } catch (error) {
      setError(true);
    }
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
      {error && (
        <Paragraph style={styles.errorMessage}>
          Incorrect username or password
        </Paragraph>
      )}

      <Button
        style={styles.buttonPadding}
        icon="login"
        mode="contained"
        onPress={handleLogin}
      >
        Login
      </Button>

      {/* <Button
        icon="login"
        mode="contained"
        style={styles.input}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Direct DASHBOARD
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  input: {
    backgroundColor: "#e2e1f9",
    margin: "6%",
  },
  buttonPadding: {
    backgroundColor: "#6c65df",
    padding: 8,
    borderRadius: 15,
    marginHorizontal: "16%",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "-4%",
    marginBottom: "5%",
    color: "red",
  },
});

export default Login;
