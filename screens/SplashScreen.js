import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('MainScreen')
        }, 2000);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                <Image source={require('../assets/logo.jpg')}
                    style={{ width: '100%', height: '30%' }} />
                <ActivityIndicator size="large" color='#00BFFF'
                    style={{ margin: 10 }} />
            </View>
        );
    }
}
