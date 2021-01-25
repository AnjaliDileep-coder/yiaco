import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper/src';
import ProductScreen from './ProductScreen'


const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <View>
                    <Image style={styles.imageh} source={require("../assets/logo.jpg")} />
                </View>
                <View style={styles.textviewh}>
                    <TouchableOpacity style={styles.textviewth} activeOpacity={0.3}>
                        <Text style={styles.texth} onPress={() => navigation.navigate("LoginScreen")}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.3}>
                        <Text style={styles.texth1} onPress={() => navigation.navigate("SignupScreen")}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    {/* <Icon style={styles.icon} name="hand" size={20} color='#00bfff' /> */}
                    <Text style={styles.text}>Welcome !</Text>
                    <Text style={styles.text1}>Start your journey with 50% OFF on your first order</Text>
                    <TouchableOpacity style={styles.textcon}>
                        <Text style={styles.text2}>GRAB OFFERS</Text>
                    </TouchableOpacity>
                    {/* <View style={styles.imagecon}>
                        <Image style={styles.image} source={require("../assets/ballon.png")} />
                    </View> */}
                </View>
                <View style={styles.res}>
                    <View style={styles.textcon}>
                        <Text style={styles.texto}>Order quicky with prescription</Text>
                        <Text>Upload prescription and tell us what you need.We do the rest!</Text>
                    </View>
                    <TouchableOpacity style={styles.view}>
                        <Text style={styles.text2}>UPLOAD  </Text>
                        <Icon1 name="arrowright" size={20} color="#00bfff" />
                    </TouchableOpacity>
                    {/* <View style={styles.imgcon}>
                        <Image style={styles.imgres} source={require("../assets/food.jpg")} />
                    </View> */}
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
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    icon: {
        paddingBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 15
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5
    },
    text1: {
        paddingRight: 150,
        paddingTop: 10
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
        paddingBottom: 20,
    },
    image: {
        height: 100,
        width: 120,
    },
    imagecon: {
        top: -150,
        left: 250
    },
    pad: {
        paddingTop: 20
    },
    pad1: {
        paddingTop: 40
    },
    pad2: {
        paddingRight: 40
    },
    res: {
        backgroundColor: 'white',
        elevation: 3,
        paddingLeft: 10
    },
    view: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    viewdir: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    imgres: {
        width: 90,
        height: 90
    },
    imgcon: {
        left: 260,
        top: -80
    },
    swipecon: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    swipeicon: {
        padding: 15,
        backgroundColor: 'pink'
    },
    swipetext: {
        alignItems: 'center'
    },
    si: {
        paddingLeft: 8
    },
    si1: {
        paddingLeft: 25
    },
    direction: {
        flexDirection: 'row',
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
    imgdir1: {
        height: 50,
        width: 80,

    },
    textdir: {
        width: 100,

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

    restext: {
        fontWeight: 'bold'
    },
    imageh: {
        width: 20,
        height: 30,
        paddingLeft: 80,


    },
    touchcon: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 20,
        alignContent: 'center',


    },
    texth: {

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'
    },
    texth1: {

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#00bfff'

    },
    textviewh: {
        flexDirection: 'row',

    },
    textviewth: {
        paddingRight: 20,
        paddingLeft: 160

    },
    header: {
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: 'white',
        elevation: 5,
        paddingBottom: 20
    }

});

export default Home;