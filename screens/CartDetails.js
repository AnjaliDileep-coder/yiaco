import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

const CartDetails = ({ route }) => {
    const navigation = useNavigation();
    const item = route.params.item
    console.log("route")
    console.log(route)
    return (
        <ScrollView>
            <View>
                <View style={styles.container} >
                    <View style={styles.cardContainer} >
                        <View >
                            <Image
                                source={item[0].image}
                                resizeMode="cover"
                                style={styles.imageCart} />
                        </View>
                        <View style={styles.textContainerCart}>
                            <View style={styles.containerCart}>
                                <Text style={styles.textCart}>{item[0].name}</Text>
                                <Text>{item[0].price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.coupontip}>
                    <TouchableOpacity style={styles.Containertip1}>
                        <Icon4 name="file-percent-outline" size={20} color='black' />
                        <Text style={styles.coupontiptext}>APPLY COUPON</Text>
                        <Icon3 style={styles.coupontipicon} name="right" size={15} color='black' />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerbillCart}>
                    <View style={styles.containerbill}>
                        <View style={styles.textcontainerbill}>
                            <Text style={styles.textbill}>Bill Details</Text>
                        </View>
                        <View style={styles.itemcontainerbill}>
                            <Text style={styles.item}>Item Total</Text>
                            <View style={styles.itembill}>
                                <Text>{item[0].price}</Text>
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
                                <Text>{item[0].price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.button}>
                <Button color="#00bfff" title="CONTINUE" onPress={() => navigation.navigate("AddScreen", { item: item })} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingRight: 15,
        paddingLeft: 10,
        paddingTop: 30
    },
    imageCart: {
        width: 70,
        height: 70
    },
    textContainerCart: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        paddingTop: 10
    },
    Containertip1: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    coupontip: {
        paddingTop: 30
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
        paddingRight: 10
    },
    containerbillCart: {
        paddingTop: 30
    },
    textcontainerbill: {
        paddingTop: 10
    },
    textbill: {
        fontWeight: 'bold'
    },
    itemcontainerbill: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    itemcontainerbill1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    itembill: {
        flexDirection: 'row'
    },
    linebill: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey'
    },
    item: {
        paddingBottom: 10
    },
    button: {
        paddingTop: 50,
        alignSelf: 'center'
    }
});
export default CartDetails;
