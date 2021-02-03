import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Left } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const SurgicalScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 75, justifyContent: 'center', paddingHorizontal: 5, backgroundColor: "white" }}>
                <View style={{ flexDirection: 'row' }}>
                    <Left style={{ flex: 1, marginTop: 5, flexDirection: "row" }}>
                        <View>
                            <Image source={require('../assets/logo.jpg')} style={{ width: 80, height: 50, marginTop: 13, left: 10 }} /></View>
                    </Left>
                    <Text style={{ color: "#00bfff", fontSize: 20, fontWeight: "bold", paddingTop: 30 }}>Store</Text>
                    <Icon name="ios-search" onPress={() => props.navigation.navigate("SearchScreen")}
                        style={{ fontSize: 24, marginTop: 29, paddingLeft: 70, color: "#00bfff", marginRight: 10 }} />
                    <Icon name="ios-cart" onPress={() => props.navigation.navigate("CartScreen")}
                        style={{ fontSize: 24, marginTop: 29, paddingLeft: 20, color: "#00bfff", marginRight: 10 }} />
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/wound.jpg')} style={styles.image1} >
                    </Image>
                    <Image source={require('../assets/scalpel.jpg')} style={styles.image2} >
                    </Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name1} onPress={() => props.navigation.navigate("ThermoScreen")}>Wound Retractors</Text>
                    <Text style={styles.name2}>Scalpel</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rate1}>$ 250</Text>
                    <Text style={styles.rate2}>$ 150</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/straightvesselclips.jpg')} style={styles.image1} >
                    </Image>
                    <Image source={require('../assets/artery_foreceps.jpg')} style={styles.image2} >
                    </Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name1}>Straight vessel clips</Text>
                    <Text style={styles.name2} onPress={() => navigation.navigate("medicalScreen")}>Artery Foreceps </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rate1}>$ 275</Text>
                    <Text style={styles.rate2}>$ 350</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/bulldog.jpg')} style={styles.image1} >
                    </Image>
                    <Image source={require('../assets/haemostatic-forceps.jpeg')} style={styles.image2} >
                    </Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name1} >Bulldog Clamps</Text>
                    <Text style={styles.name2}>Haemostatic forceps</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rate1}>$ 200</Text>
                    <Text style={styles.rate2}>$ 90</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/organ.jpg')} style={styles.image1} >
                    </Image>
                    <Image source={require('../assets/surgical.jpg')} style={styles.image2} >
                    </Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name1}>Organ and Tissue Grasping Forceps</Text>
                    <Text style={styles.name2}>Surgical Needles</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rate1}>$ 220</Text>
                    <Text style={styles.rate2}>$ 150</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/abdom.jpg')} style={styles.image1} >
                    </Image>
                    <Image source={require('../assets/scissors.jpg')} style={styles.image2} >
                    </Image>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name1}>Abdominal Retractors</Text>
                    <Text style={styles.name2}>Scissors</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.rate1}>$ 270</Text>
                    <Text style={styles.rate2}>$ 90</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    image1: {
        paddingTop: 15,
        marginRight: 10,
        marginLeft: 35,
        height: 100,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        marginTop: 20,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    image2: {
        marginLeft: 25,
        marginTop: 20,
        backgroundColor: "white",
        height: 100,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginRight: 5
    },
    rate1: {
        textAlign: 'center',
        marginLeft: 35,
        fontSize: 7,
        height: 15,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    rate2: {
        textAlign: 'center',
        marginLeft: 35,
        fontSize: 7,
        height: 15,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    name1: {
        textAlign: 'center',
        marginLeft: 35,
        paddingTop: 3,
        fontSize: 7,
        height: 15,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderLeftColor: "red"
    },
    name2: {
        textAlign: 'center',
        marginLeft: 35,
        paddingTop: 3,
        fontSize: 7,
        height: 15,
        width: "35%",
        backgroundColor: "white",
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    }
});
export default SurgicalScreen;
