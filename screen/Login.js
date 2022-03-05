import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button } from "react-native";
import { loginAPI } from "../service/api";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = async () => {
      console.log(email, password, 'input')
    const res = await loginAPI(email, password)
    console.log(res, 'res')
    //   navigation.navigate('Dashboard');
  }

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

    <Button
        title="Login"
        onPress={handleLogin}
      />
    <Button title='direct DASHBOARD' onPress={() => navigation.navigate('Dashboard')}/>
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