import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, KeyboardAvoidingView, View, LogBox } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import SearchScreen from './screens/SearchScreen';

import CartScreen from './screens/CartScreen';


import AirScreen from './screens/AirScreen';

import checkout from './screens/checkout';
import Address from './screens/Address';







const Stack = createStackNavigator();
const App = () => {

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="WelcomeScreen"
          component={WelcomeScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="Signup..."
          component={SignupScreen}
          options={
            { title: 'Signup...' },
            { headerShown: false }

          } />
        <Stack.Screen name="Login here...."
          component={LoginScreen}
          options={
            { title: 'Login here....' },
            { headerShown: false }
          } />


        <Stack.Screen name="LoadingScreen"
          component={LoadingScreen}
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name="SearchScreen"
          component={SearchScreen}
          options={
            { headerShown: false }
          } />

        <Stack.Screen name="CartScreen"
          component={CartScreen}
          options={
            { headerShown: false }
          }
        />


        <Stack.Screen name="AirScreen"
          component={AirScreen}
          options={
            { headerShown: false }
          }
        />



        <Stack.Screen name="checkout"
          component={checkout}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen name="Address"
          component={Address}
          options={
            { headerShown: false }
          }
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  // signup:{
  //   paddingTop:50,
  //   paddingLeft:120,
  //   alignItems:"center",
  //   justifyContent:"center",
  //   fontSize:35,
  //   fontWeight:"700",
  //   color:"#add8e6"
  // },
  // create:{
  //   paddingLeft:105,
  //   fontStyle:"italic",
  //   fontSize:15,
  //   paddingTop:5,
  //   paddingBottom:5,
  //   color:"#add8e6"
  // },
  // Button:{

  //   alignItems:"center",
  //   justifyContent:"center"
  // },
  // input:{
  //   width:"90%",
  //   height:50,
  //   margin:18,
  //   paddingRight:5
  // }
});
export default App;