import React from "react";
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import {height, width} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Searchlist =(props)=>{
    return<View style={styles.CardConatiner}>
        <Image 
        style={styles.image}
        source={props.destination}
        />
        <View style={styles.txtConatiner}>
            <Text style={styles.txtHeading}>Mobile App design</Text>
            <Text style={styles.catagory}>
                catogory: <Text style={{color: '#000000'}}>Graphic Designing</Text>
            </Text>
            <Text style={styles.catagory}>
                sub catogory: <Text style={{color: '#000000'}}>App Design</Text>
            </Text>
            <View style={styles.button}>
                <Text style={styles.buttontxt}>Bid</Text>
            </View>
            
        </View>
        <Text style={styles.price}>$300</Text>
    </View>
}
const AfterSearching = ({ naviagtion, navigation: { goBack } }) =>{    return(
        <View style={styles.conatiner}>
            <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>
            <View style={styles.searchConatiner}>
                <TextInput placeholder="Search" style={styles.textInput} placeholderTextColor={'#5669FF'}/>
                <AntDesign name="search1" size={28} color={'#5669FF'}/>
            </View>
            <View>
                <Searchlist destination={require('../Assests/Rectangle19.png')} />
                <Searchlist destination={require('../Assests/Rectangle19.png')} />
                <Searchlist destination={require('../Assests/Rectangle19.png')} />
                <Searchlist destination={require('../Assests/Rectangle19.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    arrow: {
        marginTop: height(2.5),
        marginLeft: width(4),
        color: 'black'
    },
    conatiner: {
        flex: 1,
        backgroundcolor: '#eeeeee',
        marginHorizontal: width(2)
    },
    searchConatiner: {
        borderWidth: 1,
        marginTop: height(1),
        borderColor: '#5669FF',
        borderRadius: width(3),
        paddingHorizontal: width(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInput: {
        width: width(80),
        height: height(5),
        color: 'black'
    },
    CardConatiner: {
        marginTop: height(2.5),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#5669FF'
    },
    image: {
        width: width(30),
        height: height(14),
        borderRadius: width(5)
    },
    txtConatiner: {
        marginLeft: width(3)
    },
    txtHeading: {
        color: '#5669FF',
        fontWeight: '400',
        fontSize: 16
    },
    catagory: {
        color: '#5669FF',
        fontWeight: '400',
        fontSize: 12
    },
    button: {
        backgroundColor: '#5669FF',
        borderRadius: width(6),
        padding: width(2),
        alignItems: 'center',
        width: width(22),
        marginLeft: width(35),
        marginTop: height(4),
        marginBottom: height(2)
    },
    buttontxt: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    price: {
        color: '#5669FF',
        position: 'absolute',
        right: 0,
        fontSize: 14,
        fontWeight: '500'
    }
});
export default AfterSearching;