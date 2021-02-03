import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AddScreen = ({ route }) => {
    const item = route.params.item
    console.log(route)
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [State, setState] = useState('');
    const [city, setCity] = useState('');
    const [landmark, setLandmark] = useState('');
    const [house, setHouse] = useState('');
    const [roadName, setRoadname] = useState('');
    return (
        <KeyboardAvoidingView behavior="position">
            <ScrollView>
                <View style={styles.container}>
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={name}
                        label="Name*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setName(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={phoneNumber}
                        keyboardType="number-pad"
                        label="Phone number*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setPhonenumber(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={pincode}
                        keyboardType="number-pad"
                        label="Pincode*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setPincode(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={State}
                        keyboardType="number-pad"
                        label="State*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setState(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={house}
                        keyboardType="number-pad"
                        label="House/Flat/Block No.*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setHouse(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={roadName}
                        keyboardType="number-pad"
                        label="Road name, Area,Colony* "
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setRoadname(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={city}
                        keyboardType="number-pad"
                        label="City*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setCity(text)} />
                    <TextInput style={styles.input}
                        mode="outlined"
                        value={landmark}
                        keyboardType="number-pad"
                        label="Landmark*"
                        theme={{ colors: { primary: "#00bfff" } }}
                        onChangeText={(text) => setLandmark(text)} />
                    <View style={styles.button}>
                        <Button mode="contained" onPress={() => navigation.navigate("Payment", { item: item })} color="#00bfff" width={200}>Save Address</Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: '#ffa500'
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: 'center'
    },
    input: {
        width: "80%",
        height: 40,
        margin: 18,
        marginLeft: 40
    }
});
export default AddScreen;
