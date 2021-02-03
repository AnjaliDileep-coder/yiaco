import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {
    const navigation = useNavigation();
    const [Search, setSearch] = useState('');
    const [product, setProduct] = useState([
        { name: 'Thermometer', image: require("../assets/thermometer.jpg"), price: '$ 250', description: 'A thermometer is a device that measures temperature or a temperature gradient (the degree of hotness or coldness of an object).', id: '1' },
        { name: 'Pen Knife ', image: require("../assets/pen_knifes.jpeg"), price: '$ 150', description: 'A scalpel, or lancet, or bistoury, is a small and extremely sharp bladed instrument used for surgery, anatomical dissection, podiatry and various arts and crafts (called a hobby knife).', id: '2' },
        { name: 'Sthethescope', image: require("../assets/sthethescope.jpg"), price: '$ 275', description: 'The stethoscope is an acoustic medical device for auscultation, or listening to internal sounds of an animal or human body.', id: '3' },
        { name: 'Artery Foreceps', image: require("../assets/artery_foreceps.jpg"), price: '$ 375', description: 'Artery forceps are used to compress an artery to stem bleeding, because of this they belong to a group of surgical instruments called hemostats.', id: '4' },
        { name: 'KN95 Mask', image: require("../assets/KN95_mask.jpeg"), price: '$ 200', description: 'The KN95 Respirator Mask is worn to protect the wearer from viruses, bacteria, pollen and other particles', id: '5' },
        { name: 'Surgical Gloves', image: require("../assets/surgical_gloves.jpg"), price: '$ 90', description: 'The primary purpose of surgical gloves is to act as a protective barrier to prevent the possible transmission of diseases between healthcare professionals and patients during surgical procedures. ', id: '6' },
        { name: 'Walking Crutches', image: require("../assets/walking_crutches.jpg"), price: '$ 270', description: 'Crutches are a type of Walking Aids that serve to increase the size of an individuals Base of support.', id: '7' },
        { name: 'sphygmomanometer', image: require("../assets/bp_monitor.jpg"), price: '$ 90', description: 'A sphygmomanometer, also known as a blood pressure monitor, or blood pressure gauge, is a device used to measure blood pressure, composed of an inflatable cuff to collapse and then release the artery under the cuff in a controlled manner, and a mercury or aneroid manometer to measure the pressure.', id: '8' },
        { name: 'Wheel Chair', image: require("../assets/wheel_chair.jpg"), price: '$ 250', description: 'A wheelchair is a chair with wheels, used when walking is difficult or impossible due to illness, injury, problems related to old age, or disability.', id: '9' },
        { name: 'Microscope', image: require("../assets/microscope.jpg"), price: '$ 200', description: 'A microscope is a laboratory instrument used to examine objects that are too small to be seen by the naked eye.', id: '10' },
        { name: 'Dental Chair', image: require("../assets/dental_chair.jpg"), price: '$ 400', description: 'A dental engine is a large chair-side appliance for use in a dentists office.At minimum, a dental engine serves as a source of mechanical or pneumatic power for one or more handpieces.', id: '11' },
        { name: 'Hygenic Tools', image: require("../assets/hygenic_tools.jpg"), price: '$ 150', description: 'Hygienic design principles cover everything from the materials used to the design of the equipment, with the aim of making them safe when in contact with food, and quicker and easier to clean and dry.', id: '12' },
        { name: 'Surgical Table', image: require("../assets/surgical_table.jpg"), price: '$ 550', description: 'An operating table, sometimes called operating room table, is the table on which the patient lies during a surgical operation.', id: '13' },
        { name: 'Therapy Equipment', image: require("../assets/therapy_equipment.jpg"), price: '$ 350', description: 'Treadmills, exercise bikes, pedal exerciser or elliptical trainer are some of the most common types of physiotherapy equipments used in most of the therapy clinics and hospitals.', id: '14' },
    ]);
    return (
        <View>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={product}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('ProductDetailsScreen', { name: item })} >
                        <View style={styles.item}>
                            <Image style={styles.image} source={item.image} />
                            <Text >{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    </TouchableOpacity>)} />
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 18,
        marginVertical: 20,
        elevation: 10,
        width: 160,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50
    }
});
export default ProductScreen;
