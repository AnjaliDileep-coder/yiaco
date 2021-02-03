import React, { useState } from 'react';
import { StyleSheet, Text, AsyncStorage, KeyboardAvoidingView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen(props) {
  const onSubmit = () => {
    fetch('http://192.168.1.6:3000/api/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      })
      .then(res => res.json())
      .then(async function (res) {
        if (res != null) {
          alert('success');
          console.log(res);
          AsyncStorage.setItem('user', JSON.stringify(res));
          var user = await AsyncStorage.getItem('user');
          var parsed = JSON.parse(user);
          props.navigation.navigate('LoadingScreen')
        } else {
          alert('try again')
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <TextInput style={styles.input}
          value={email}
          mode="outlined"
          label="Email"
          theme={{ colors: { primary: "#00bffff" } }}
          onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.input}
          secureTextEntry={true}
          value={password}
          mode="outlined"
          label="Password"
          theme={{ colors: { primary: "#00bffff" } }}
          onChangeText={(text) => setPassword(text)} />
        <View style={styles.button}>
          <Button mode="contained" onPress={() => props.navigation.navigate("MainScreen")} color="#00bfff" width={200}>LOGIN</Button>
        </View>
        <View style={styles.signup}>
          <Text style={styles.signup1} >Click here to </Text>
          <Text onPress={() => props.navigation.navigate("SignupScreen")} style={styles.signuptext}> Signup</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  login: {
    paddingTop: 100,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
    fontWeight: "700",
    color: "#00bfff"
  },
  button: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "90%",
    height: 50,
    margin: 18,
    paddingRight: 5
  },
  signup: {
    flexDirection: 'row',
    paddingTop: 10
  },
  signup1: {
    paddingLeft: 200,
    fontStyle: "italic",
    paddingTop: 10
  },
  signuptext: {
    color: '#00bfff',
    paddingTop: 9
  }
});
