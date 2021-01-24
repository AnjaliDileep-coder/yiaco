import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Button, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

export default class SplashScreen extends Component {

    componentDidMount(){
setTimeout(() => {
    this.props.navigation.navigate('MainScreen')
}, 2000);
    }

render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center', backgroundColor:'#fff'}}>
            <Image source={require('../assets/logo.jpg')}
                style={{width:'100%',height:'30%'}}/>
                <ActivityIndicator size="large" color= '#00BFFF'
                style={{margin:10}}/>
                </View>
    );
};
}
