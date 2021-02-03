import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper/src';
import ProductScreen from './ProductScreen'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <Image style={styles.image} source={require("../assets/logo.jpg")} />
                    </View>
                    <View style={styles.textview}>
                        <TouchableOpacity style={styles.textview1} activeOpacity={0.3}>
                            <Text style={styles.textview2} onPress={() => navigation.navigate("LoginScreen")}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.textview3} onPress={() => navigation.navigate("SignupScreen")}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View>
                        <Text style={styles.text}>Welcome !</Text>
                        <Text style={styles.text0}>Start your journey with 50% OFF on your first order</Text>
                        <TouchableOpacity style={styles.textcon}>
                            <Text style={styles.text2}>GRAB OFFERS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.res}>
                        <View style={styles.textcon}>
                            <Text style={styles.text1}>Order quicky with prescription</Text>
                            <Text>Upload prescription and tell us what you need.We do the rest!</Text>
                        </View>
                        <TouchableOpacity style={styles.upload}>
                            <Text style={styles.text2}>UPLOAD  </Text>
                            <Icon1 name="arrowright" size={20} color="#00bfff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pad}></View>
                    <View >
                        <View style={styles.direction}>
                            <Icon3 name="thumbs-up" size={20} color="black" />
                            <Text style={styles.directionpad}>Top Featured Brand</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            style={styles.viewdir}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/thermometer.jpg")} />
                                <Text style={styles.textdir}>Thermometer</Text>
                                <Text style={styles.dirtext}>$ 125</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/microscope.jpg")} />
                                <Text style={styles.textdir}>Microscope</Text>
                                <Text style={styles.dirtext}>$ 300</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/sthethescope.jpg")} />
                                <Text style={styles.textdir}>Stethoscope</Text>
                                <Text style={styles.dirtext}>$ 290</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/KN95_mask.jpeg")} />
                                <Text style={styles.textdir}>KN95_mask</Text>
                                <Text>$ 25</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/artery_foreceps.jpg")} />
                                <Text style={styles.textdir}>Artery Forceps</Text>
                                <Text style={styles.dirtext}>$ 345</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/dental_chair.jpg")} />
                                <Text style={styles.textdir}>Dental Chair</Text>
                                <Text style={styles.dirtext}>$ 500</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/bp_monitor.jpg")} />
                                <Text style={styles.textdir}>Bp Monitor</Text>
                                <Text style={styles.dirtext}>$ 245</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("AirScreen")}>
                                <Image style={styles.imgdir} source={require("../assets/first_aid_kit.jpeg")} />
                                <Text style={styles.textdir}>First Aid Kit</Text>
                                <Text>$ 50</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <Swiper
                        height={480}
                        horizontal={true}
                        activeDotColor="#00bfff">
                        <Image style={styles.imgswiper} source={require("../assets/s6.jpg")} />
                        <Image style={styles.imgswiper} source={require("../assets/s7.jpg")} />
                        <Image style={styles.imgswiper} source={require("../assets/s4.jpg")} />
                        <Image style={styles.imgswiper} source={require("../assets/s3.jpg")} />
                        <Image style={styles.imgswiper} source={require("../assets/s8.jpg")} />
                        <Image style={styles.imgswiper} source={require("../assets/s9.jpg")} />
                    </Swiper>
                </View>
                <View style={styles.pad}></View>
                <View>
                    <View style={styles.direction}>
                        <Text style={styles.directionpad}>Featured Categories</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        style={styles.viewdir}
                        showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.touchcon} onPress={() => navigation.navigate("SurgicalScreen")}>
                            <Image style={styles.imgdir} source={require("../assets/surgical_equipments.jpg")} />
                            <Text style={styles.textdir1}> Surgical Equipments</Text>
                        </TouchableOpacity>
                        <View style={styles.pad2}></View>
                        <TouchableOpacity style={styles.touchcon} onPress={() => navigation.navigate("AirScreen")}>
                            <Image style={styles.imgdir} source={require("../assets/non_surgical_equipments.jpg")} />
                            <Text style={styles.textdir1}> Non-Surgical Equipments</Text>
                        </TouchableOpacity>
                        <View style={styles.pad2}></View>
                        <TouchableOpacity style={styles.touchcon} onPress={() => navigation.navigate("AirScreen")}>
                            <Image style={styles.imgdir} source={require("../assets/dental_equipments.jpg")} />
                            <Text style={styles.textdir1}>Dental Equipments</Text>
                        </TouchableOpacity>
                        <View style={styles.pad2}></View>
                        <TouchableOpacity style={styles.touchcon} onPress={() => navigation.navigate("AirScreen")}>
                            <Image style={styles.imgdir} source={require("../assets/first_aid_kit.jpeg")} />
                            <Text style={styles.textdir1}>First Aid Kit</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.direction}>
                    <Text style={styles.directionpad}>More To love</Text>
                </View>
                <ProductScreen />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingRight: 1,
        paddingLeft: 1,
        paddingTop: 10
    },
    header: {
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: 'white',
        elevation: 5,
        paddingBottom: 20
    },
    image: {
        width: 20,
        height: 30,
        paddingLeft: 80
    },
    textview2: {
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'
    },
    textview3: {
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'
    },
    textview: {
        flexDirection: 'row'
    },
    textview1: {
        paddingRight: 20,
        paddingLeft: 160
    },
    container1: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 15
    },
    text0: {
        paddingRight: 150,
        paddingTop: 10
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
    text2: {
        backgroundColor: 'white',
        elevation: 5,
        marginRight: 260,
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff',
        borderRadius: 5
    },
    textcon: {
        paddingTop: 20,
        paddingBottom: 20
    },
    pad: {
        paddingTop: 20
    },
    pad2: {
        paddingRight: 40
    },
    res: {
        backgroundColor: 'white',
        elevation: 3,
        paddingLeft: 10
    },
    upload: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    viewdir: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    direction: {
        flexDirection: 'row'
    },
    directionpad: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    imgdir: {
        height: 50,
        width: 80
    },
    textdir: {
        width: 100
    },
    textdir1: {
        width: 100,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    dirtext: {
        paddingRight: 60
    },
    imgswiper: {
        width: 400,
        height: 400
    },
    touchcon: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 20,
        alignContent: 'center'
    }
});
export default Home;
