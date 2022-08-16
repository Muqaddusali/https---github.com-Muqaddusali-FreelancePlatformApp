import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { height, width } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign'

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
const Box = (props)=>{
    return<View style={{backgroundColor: generateColor(),...styles.boxContainer}}>
        <View>
            <Text style={styles.txtxxx}>{props.txt}</Text>
        </View>
    </View>
}

const ServicesTwo = ({ navigation, navigation: { goBack } }) => {
  return (
    <View style={StyleSheet.container}>
        <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={()=> goBack()}/>
      <View style={{alignItems: 'center', marginTop: height(10)}}>
                <Image
                style={styles.image}
                source={require('../Assests/image89.png')}
                />
                <Text style={styles.text}>David Silba</Text>
            </View>

            <View style={styles.heading}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('About')}>
                    <Text style={styles.txt}>ABOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ServicesTwo')}>
                    <Text style={[styles.txt, styles.txtx]}>SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Reviews')}>
                    <Text style={styles.txt}>REVIEWS</Text>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity onPress={()=> navigation.navigate('AddDelete')}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>add or delete services</Text>
                </View>
            </TouchableOpacity>
            <View style={{marginTop: height(2), marginHorizontal: width(4)}}>
                    <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                        <Box txt="Logo Designing"/>
                        <Box txt="Graphic Designing"/>
                        <Box txt="VA"/>
                        <Box txt="Web Designing"/>
                        <Box txt="UI & UX"/>
                        <Box txt="Video Editing"/>
                        <Box txt="Animations"/>
                        <Box txt="Social media marketing"/>
                        <Box txt="Adobe Xd"/>
                        <Box txt="Illustrator"/>
                        <Box txt="Photoshop"/>
                        <Box txt="Print Designing"/>
                        <Box txt="Content Writing"/>
                        <Box txt="Assignment writing"/>
                        <Box txt="VA"/>
                        <Box txt="Photo editing"/>
                    </View>
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
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: width(20),
        height: height(11),
        borderRadius: width(10), 
    },
    text: {
        marginTop: height(2),
        fontSize: 24,
        fontWeight: '400', 
        fontFamily: 'poppins',
        color: 'black'
    },
    txt: {
        fontSize: 16,
        fontWeight: '400', 
        fontFamily: 'poppins',
        color: 'black'
    },
    txtx: {
        color: '#5669FF',
        borderBottomWidth: 2,
        borderBottomColor: '#5669FF',
        paddingBottom: height(0.5)
    },
    txtxx: {
        color: '#5669FF'
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: width(6),
        marginTop: height(1),
        marginBottom: height(3)
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#5669FF',
        marginHorizontal: width(6),
        justifyContent: 'center',
        alignItems: 'center',
        height: height(5),
        borderRadius: width(3)

    },
    buttonTxt: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'poppins',
        fontWeight: '400'
    },
    boxContainer: {
        paddingHorizontal: width(2),
        paddingVertical: height(0.7),
        marginHorizontal: width(1),
        borderRadius: width(3),
        marginTop: height(1),
    },
    txtxxx: {
        color: 'white'
    }
});
export default ServicesTwo