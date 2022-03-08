import React from "react";
import { View, StyleSheet,SafeAreaView  } from "react-native";
import { TextInput,Button } from 'react-native-paper';


import { loginAPI } from "../service/api";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = async () => {
      console.log(email, password, 'input')
    const res = await loginAPI(email, password)
    console.log(res, 'res')
    navigation.navigate('Dashboard');
  }

  return (
    <SafeAreaView  style={styles.center}>
    <View    >
      <TextInput style={styles.input}
        left={<TextInput.Icon name="email-outline" />}
        label="User ID"
        mode='outlined'
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput style={styles.input}
        left={<TextInput.Icon name="lock-outline" />}
        label="Password"
        mode='outlined'
        onChangeText={onChangePassword}
        value={password}
      />
  <Button icon="login" mode="contained" style={styles.buttonp}  onPress={() => navigation.navigate('Dashboard')} >
   Login
  </Button>

  {/* <Button icon="login" mode="contained" style={styles.input} onPress={handleLogin}>
    Direct DASHBOARD
  </Button> */}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin:9,
  },

  center:{
    flex: 1,
    padding: 80,
  },
   buttonp:{
     margin:9,
     padding:8,

   }


});

export default Login;