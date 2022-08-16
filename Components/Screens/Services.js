import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { height, width } from "react-native-dimension";
import AntDesign from 'react-native-vector-icons/AntDesign'

const Box = (props)=>{
    return<View style={styles.boxContainer}>
        <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.txt}>{props.txt}</Text>
        </TouchableOpacity>
    </View>
}

const Services = ({navigation, navigation: {goBack}}) =>{
    return(
        <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
            <View style={styles.container}>
                <AntDesign name={"arrowleft"} style={{color: 'black'}} size={25} onPress={()=> goBack()}/>
                <ScrollView>
                <Text style={styles.topic}>Services you provide</Text>
                <View>
                    <Text style={styles.subTitle1}>Development Services</Text>
                    <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                        <Box txt="Development"/>
                        <Box txt="Web Development"/>
                        <Box txt="VA"/>
                        <Box txt="App Development"/>
                        <Box txt="UI"/>
                        <Box txt="App Development"/>
                        <Box txt="Programing"/>
                    </View>
                </View>
                <View>
                    <Text style={styles.subTitle1}>Development Services</Text>
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
                <View>
                    <Text style={styles.subTitle1}>Development Services</Text>
                    <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                        <Box txt="Development"/>
                        <Box txt="Web Development"/>
                        <Box txt="VA"/>
                        <Box txt="App Development"/>
                        <Box txt="UI"/>
                        <Box txt="App Development"/>
                        <Box txt="Programing"/>
                    </View>
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate('TabNavigation')}>
                    <View style={styles.continueButton}>
                        <Text style={styles.continueButtontxt}>Continue <AntDesign name="arrowright" size={15} /></Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: height(5),
        marginHorizontal: width(4),
    },
    topic: {
        color: '#000000',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
        textAlign: 'center',
        marginBottom: height(6)
    },
    subTitle1: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '500',
        marginTop: height(1.5)
    },
    boxContainer: {
        backgroundColor: 'white',
        paddingHorizontal: width(2),
        paddingVertical: height(0.7),
        marginHorizontal: width(1),
        borderRadius: width(3),
        marginTop: height(1),
        elevation: width(2)
    },
    txt: {
        color: '#5669FF'
    },
    continueButton: {
        borderWidth: 1,
        borderColor: '#5669FF',
        backgroundColor: '#5669FF',
        borderRadius: width(5),
        marginTop: height(2),
        alignSelf: 'flex-end',
        padding: width(5),
        
    },
    continueButtontxt: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '300'
    }
});

export default Services;