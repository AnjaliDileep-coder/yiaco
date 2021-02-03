import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Payment = ({ route }) => {
    const item = route.params.item
    console.log(item)
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.payment}>
                <View style={styles.paymentcontainer}>
                    <Image style={styles.image} source={item[0].image} />
                    <Text style={styles.paymenttext}>{item[0].name}</Text>
                </View>
                <View style={styles.paymentcontainertext}>
                    <Text style={styles.paymenttextcolor}>{item[0].Quantity}</Text>
                    <Text style={styles.paymenttextcolor}>{item[0].price}</Text>
                </View>
            </View>
            <View style={styles.textpay}>
                <Text>PAY ON DELIVERY</Text>
            </View>
            <View style={styles.payment}>
                <View style={styles.direction}>
                    <Icon3 style={styles.iconcash} name="rupee" size={15} color="green" />
                    <Icon1 name="document-landscape" size={32} color="#00fa9a" />
                    <Icon1 style={styles.iconcash1} name="dots-three-vertical" size={15} color="green" />
                    <Text style={styles.texticon}>Cash</Text>
                    <Icon2 name="checkcircleo" size={17} color="grey" />
                </View>
                <View style={styles.textcash}>
                    <Text style={styles.paymenttextcolor}>Online payment recommended to reduce contact between you and delivery partner</Text>
                </View>
            </View>
            <View style={styles.textpay}>
                <Text>CREDIT/DEBIT CARDS</Text>
            </View>
            <View style={styles.payment}>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentDetails", { item: item })} style={styles.direction}>
                    <Icon2 style={styles.iconstyle} name="plussquareo" size={15} color="#00bfff" />
                    <Text style={styles.touchcolor}>ADD CARD</Text>
                </TouchableOpacity>
                <Text style={styles.iconstyletext}>Save and Pay via Cards.</Text>
                <View style={styles.direction1}>
                    <View style={styles.imgpad} >
                        <Image style={styles.imagevisa} source={require("../assets/visa.png")} />
                    </View>
                    <View style={styles.imgpad1}>
                        <Image style={styles.imagemaster} source={require("../assets/master.png")} />
                    </View>
                    <View style={styles.imgpad1}>
                        <Image style={styles.imageamer} source={require("../assets/american.png")} />
                    </View>
                    <View style={styles.imgpad1}>
                        <Image style={styles.imageru} source={require("../assets/rupay.png")} />
                    </View>
                </View>
            </View>
            <View style={styles.textpay}>
                <Text>UPI</Text>
            </View>
            <View style={styles.payment}>
                <View style={styles.direction}>
                    <View>
                        <TouchableOpacity >
                            <View style={styles.upi}>
                                <Image style={styles.imagegpay} source={require("../assets/GooglePay.png")} />
                            </View>
                            <Text style={styles.touchcolor1}>Google Pay</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgpad2}>
                        <TouchableOpacity >
                            <View style={styles.upi1}>
                                <Image style={styles.imagephnpe} source={require("../assets/phonepe.png")} />
                            </View>
                            <Text style={styles.touchcolor1}>PhonePe UPI</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.direction2}>
                    <Icon2 style={styles.iconstyle} name="plussquareo" size={15} color="#00bfff" />
                    <Text style={styles.touchcolor}>ADD NEW UPI ID</Text>
                </TouchableOpacity>
                <Text style={styles.iconstyletext}>You need to have a registered UPI ID</Text>
            </View>
            <View style={styles.textpay}>
                <Text>NETBANKING</Text>
            </View>
            <View style={styles.payment}>
                <View style={styles.direction}>
                    <TouchableOpacity >
                        <Image style={styles.image} source={require("../assets/hdfc.png")} />
                        <Text style={styles.touchcolor3}>HDFC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgpad2}>
                        <Image style={styles.image} source={require("../assets/icici.png")} />
                        <Text style={styles.touchcolor3}>ICICI</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.imgpad2}>
                        <Image style={styles.image} source={require("../assets/sbi.png")} />
                        <Text style={styles.touchcolor2}>SBI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgpad2}>
                        <Image style={styles.image} source={require("../assets/axis.png")} />
                        <Text style={styles.touchcolor2}>Axis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgpad2}>
                        <Image style={styles.image} source={require("../assets/kotak.png")} />
                        <Text style={styles.touchcolor3}>Kotak</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line1}></View>
                <TouchableOpacity style={styles.direction1} >
                    <Text style={styles.touchcolor}>MORE BANKS</Text>
                    <Icon2 style={styles.iconstyle1} name="right" size={11} color='grey' />
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    payment: {
        backgroundColor: 'white',
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    paymentcontainer: {
        flexDirection: 'row'
    },
    paymentcontainertext: {
        flexDirection: 'row',
        paddingLeft: 50,
        top: -15
    },
    paymenttext: {
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    paymenttextcolor: {
        color: 'grey'
    },
    textpay: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
    },
    direction: {
        flexDirection: 'row'
    },
    direction1: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    direction2: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    iconcash: {
        left: 13,
        top: 9
    },
    iconcash1: {
        right: 15,
        top: 8.2
    },
    texticon: {
        paddingRight: 260,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    textcash: {
        paddingLeft: 55,
        paddingTop: 10,
        paddingBottom: 20
    },
    image: {
        width: 40,
        height: 40,
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        paddingTop: 20
    },
    touchcolor: {
        color: '#00bfff'
    },
    touchcolor1: {
        color: 'grey'
    },
    touchcolor2: {
        color: 'grey',
        paddingLeft: 7,
        paddingTop: 10
    },
    touchcolor3: {
        color: 'grey',
        paddingTop: 10
    },
    iconstyle: {
        paddingRight: 20
    },
    iconstyle1: {
        paddingLeft: 270,
        paddingTop: 3
    },
    iconstyletext: {
        paddingLeft: 34,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'grey'
    },
    imagevisa: {
        width: 37,
        height: 12
    },
    imagemaster: {
        width: 34,
        height: 20,
    },
    imageamer: {
        width: 39,
        height: 20,
    },
    imageru: {
        width: 35,
        height: 20,
    },
    imgpad: {
        paddingLeft: 34
    },
    imgpad1: {
        paddingLeft: 14
    },
    imgpad2: {
        paddingLeft: 44
    },
    upi1: {
        paddingLeft: 24,
        paddingBottom: 20
    },
    imagegpay: {
        width: 58,
        height: 30,
    },
    imagephnpe: {
        width: 30,
        height: 30,
    },
    upi: {
        paddingBottom: 20
    }
});
export default Payment;
