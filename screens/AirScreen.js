import { } from 'expo-status-bar';
import React from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import { Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductScreen from './ProductScreen';

const AirScreen = (props) => {
  return (
    <ScrollView >
      <View style={{ height: 75, justifyContent: 'center', paddingHorizontal: 5, backgroundColor: "white" }}>
        <View style={{ flexDirection: 'row' }}>
          <Left style={{ flex: 1, marginTop: 5, flexDirection: "row" }}>
            <View>
              <Image source={require('../assets/logo.jpg')} style={{ width: 80, height: 50, marginTop: 13, left: 10 }} /></View>
          </Left>
          <Text style={{ color: "#00bfff", fontSize: 20, paddingLeft: 0, fontWeight: "bold", paddingTop: 30 }}>Store</Text>
          <Icon name="ios-search" onPress={() => props.navigation.navigate("SearchScreen")}
            style={{ fontSize: 24, marginTop: 29, paddingLeft: 70, color: "#00bfff", marginRight: 10 }} />
          <Icon name="ios-cart" onPress={() => props.navigation.navigate("CartScreen")}
            style={{ fontSize: 24, marginTop: 29, paddingLeft: 20, color: "#00bfff", marginRight: 10 }} />
        </View>
      </View>
      <ProductScreen />
    </ScrollView>
  );
}
export default AirScreen;
