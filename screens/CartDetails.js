import React from 'react';
import { Text, Image, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const CartDetails = ({route}) => {
    const navigation = useNavigation();
    const item =route.params.item
    return (
        <ScrollView>
            <View>
                <View style={styles.cardContainerCart} >
                    <View style={styles.cardContainer} >
                        <View >
                            <Image
                                source={item.image}
                                resizeMode="cover"
                                style={styles.imageCart}
                            />
                        </View>
                        <View style={styles.textContainerCart}>
                            <View style={styles.containerCart}>
                                <Text style={styles.textCart}>{item.name}</Text>
                                <Text>{item.price}</Text>
                            </View>
                            
                        </View>
                    </View>
                  
                   
                </View>
              <View>
                    <View style={styles.coupontip}>
                        <TouchableOpacity style={styles.Containertip1}>
                            <Icon4 name="file-percent-outline" size={20} color='black' />
                            <Text style={styles.coupontiptext}>APPLY COUPON</Text>
                            <Icon3 style={styles.coupontipicon} name="right" size={15} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerbillCart}>
                    <View style={styles.containerbill}>
                        <View style={styles.textcontainerbill}>
                            <Text style={styles.textbill}>Bill Details</Text>
                        </View>
                        <View style={styles.itemcontainerbill}>
                            <Text  style={styles.it}>Item Total</Text>
                            <View style={styles.itembill}>
                               
                                <Text>{item.price}</Text>
                            </View>
                        </View>
                       
                        
                        <View style={styles.linebill}></View>
                        
                        <View style={styles.itemcontainerbill1}>
                            <Text>Delivery Charge</Text>
                            <View style={styles.itembill}>
                               
                                <Text>FREE</Text>
                            </View>
                        </View>
                        <View style={styles.linebill}></View>
                        <View style={styles.itemcontainerbill1}>
                            <Text>To Pay</Text>
                            <View style={styles.itembill}>
                              
                                <Text>{item.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View  style={styles.btn}>
            <Button color="#00bfff" title="CONTINUE" onPress={()=>navigation.navigate("AddScreen",{item:item})} />
            </View>
        </ScrollView>
    )



}


const styles = StyleSheet.create({
    cardContainerCart: {
        backgroundColor: 'white',
        paddingRight: 15,
        paddingLeft: 10,
        paddingTop: 30

    },
    imageCart: {
        width: 70,
        height: 70,
    },

    textContainerCart: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
    },
    iconContainer1: {
        flexDirection: 'row',
        //paddingLeft: 10,
    },
    iconContainer2: {
        flexDirection: 'row',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'grey',
        top: -6
    },
    iconContainer3: {
        flexDirection: 'row',
        // paddingRight:15,
    },
    iconCart: {
        position: 'relative',
        paddingTop: 4,
        right: 11
    },
    icon1: {
        paddingRight: 10,
        paddingTop: 3,
    },
    icon2: {
        paddingLeft: 10,
        paddingTop: 3,

    },
    text: {
        color: 'green'
    },
    text1: {
        color: '#87cefa'
    },
    textcolor1: {
        color: '#6495ed'
    },
    textcolor2: {
        color: 'grey'
    },
    icon3: {
        paddingTop: 3,
    },
    iconContainer4: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 15,
    },
    line: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
        paddingTop: 30,

    },
    icon4: {
        paddingRight: 10
    },
    Containertip: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    Containertexttip: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 15,

    },
    Containertippress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    Containertipstext: {
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 15,
    },
    Containertips: {
        flexDirection: 'row',
        marginLeft: 32,
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 60,
        paddingTop: 8,
        paddingBottom: 8
    },
    Containertipsicon: {
        paddingTop: 4,
    },
    Containertip1: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    tipCart: {
        paddingTop: 30,
    },
    tip: {
        backgroundColor: 'white',
        paddingTop: 15,
    },
    coupontip: {
        paddingTop: 30,
    },
    coupontiptext: {
        paddingLeft: 10,
        paddingTop: 2
    },
    coupontipicon: {
        paddingLeft: 220,
        paddingTop: 2
    },
    containerbill: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerbillCart: {

        paddingTop: 30
    },
    textcontainerbill: {
        paddingTop: 10,
    },
    textbill: {
        fontWeight: 'bold'
    },
    itemcontainerbill: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemcontainerbill1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itembill: {
        flexDirection: 'row'
    },
    iconbill: {
        paddingTop: 4,
    },
    linebill: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
    },
    textbill1: {
        fontWeight: 'bold',
        color: 'orange'
    },
    support: {
        paddingLeft: 15,
        paddingRight: 7,
    },
    supporttext: {
        paddingLeft: 45,
        paddingBottom: 15,
    },
    supporticon: {
        left: 16,
        top: 22
    },
    image: {
        width: 200,
        height: 200,

    },
    imageContainer: {
        paddingTop: 210,
        paddingBottom: 40,

    },
    cartContainer: {
        alignItems: 'center'
    },
    textstyle: {
        fontWeight: 'bold'
    },
    textContainer: {
        paddingBottom: 30,
        paddingTop: 20,
        alignItems: 'center',

    },
    text: {
        color: 'grey'
    },
    container: {
        borderWidth: 2,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 25,
        paddingRight: 25,
        borderColor: '#ffa500'

    },
    containertext: {
        color: '#ffa500',
        fontWeight: 'bold',
    },
    it:{
        paddingBottom:10
    },
    btn:{
        paddingTop:50,
        alignSelf:'center'
    }
});

export default CartDetails;