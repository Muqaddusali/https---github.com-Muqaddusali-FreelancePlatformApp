import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { height, width } from "react-native-dimension";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Bid = ({navigationHandler, Topic, price})=>{

    return<View style={{marginBottom: height(2.5)}}>
            <View style={styles.BidContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.profile}>
                        <Image 
                        source={require('../Assests/Vector.png')}
                        style={styles.image}
                        />
                    </View>
                    <View >
                        <Text style={styles.txt}>{Topic}</Text>
                        <Text style={styles.txtx}>Varified <MaterialIcons style={{color: 'blue'}} name={"verified"} size={15}/></Text>
                        <Text style={styles.txtx}>Job Rate 24%</Text>
                    </View>
                </View>
                    
                <View>
                    <View style={{marginRight: width(3)}}>
                        <Text style={styles.budget}>Budget</Text>
                        <Text style={styles.price}>${price}/-</Text>
                    </View>    
                </View>
                
            
            </View>
        
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: width(4), marginBottom: height(2)}}>
                    <Text style={styles.txtxx}>I am looking for a graphic designer!</Text> 
                    <TouchableOpacity onPress={navigationHandler}>
                        <View style={styles.button}>
                            <Text style={styles.buttontxt}>Bid</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            <View style={{borderBottomWidth: width(0.2), borderBottomColor: '#5669FF', marginHorizontal: width(7)}}></View>

    </View>
}

const Client = ({navigation, navigation: {goBack}}) =>{
    const BidData = [
        {
            id: 1,
            Topic: 'David Jack',
            price: 300
        },
        {
            id: 2,
            Topic: 'Lucifer',
            price: 280
        },
        {
            id: 3,
            Topic: 'Lucifer',
            price: 280
        },
        {
            id: 4,
            Topic: 'Lucifer',
            price: 280
        },
    ]
    const navigationHandler = ()=>{
        navigation.navigate('Proposel')
    }
    return(
        <View style={styles.container}>
            <View >
            <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>
            <Text style={styles.heading}>Client request</Text>
            </View>
            <View style={styles.borderContainer}>
                {
                    BidData.map(item => {
                        return <Bid Topic = {item.Topic} key = {item.id} price = {item.price} navigationHandler={navigationHandler}/>
                    })
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    arrow: {
        marginTop: height(2.5),
        marginLeft: width(4),
        color: 'black'
    },
    heading: {
        color: '#5669FF',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: height(2),
        borderBottomWidth: 0.3,
        borderColor: '#5669FF'
    },
    borderContainer: {
        paddingTop: height(6),
        
    },
    BidContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: width(4)
    },
    image: {
        width: width(5),
        height: height(3),
    },
    profile: {
        backgroundColor: '#5669FF40',
        height: height(7),
        width: width(12),
        borderRadius: width(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width(6),
        
    },
    txt: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'poppins',
        color: 'black'
    },
    txtx: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'poppins',
        color: 'black',
    },
    budget: {
        fontFamily: 'poppins',
        fontSize: 14,
        fontWeight: '400',
        color: 'black'
    },
    price: {
        fontFamily: 'poppins',
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    button: {
        borderWidth: 1,
        borderColor: '#5669FF',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5669FF40',
        paddingHorizontal: width(6),
        paddingVertical: height(0.6),
    },
    buttontxt: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 15,
        color: 'black'
    },
    txtxx: {
        marginLeft: width(6),
        marginTop: height(1),
        color: 'black',
        fontFamily: 'poppins',
        fontSize: 12
    }
})
export default Client;