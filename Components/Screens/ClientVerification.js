import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {height, width} from 'react-native-dimension';
import { TextInput } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign'

const ClientVerification = ({navigation, navigation: { goBack } }) =>{
    return(
        <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
            <AntDesign name={"arrowleft"} style={style.arrow} size={20} onPress={() => goBack()}/>
            <View style={style.container}>
                <Text style={style.topic}>Verification</Text>
                <View style={{marginTop: height(2)}}>
                    <Text style={style.text}>We've send you the verification</Text>
                    <Text style={style.text}>code on +1 2620 0323 7631</Text>
                </View>
                <View style={style.InputContainer}>
                    <TextInput style={style.InputBox} keyboardType = 'numeric' maxLength={1} placeholder="4" placeholderTextColor={'#120D26'} />
                    <TextInput style={style.InputBox} keyboardType = 'numeric' maxLength={1} placeholder="4" placeholderTextColor={'#120D26'}/>
                    <TextInput style={style.InputBox} keyboardType = 'numeric' maxLength={1} placeholder="-" placeholderTextColor={'#120D26'}/>
                    <TextInput style={style.InputBox} keyboardType = 'numeric' maxLength={1} placeholder="-" placeholderTextColor={'#120D26'}/>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('ClientTabNav')} activeOpacity={0.8} style={style.btn}>
                    <Text style={style.btnTxt}>Submit</Text>
                    <View  style={style.btnIcon}>
                        <AntDesign name={"arrowright"} size={20} color={'white'}/>
                    </View>
                </TouchableOpacity>
                <View style={style.txtx}>
                    <Text style={style.txtx1}>Re-send code in</Text>
                    <Text style={style.txtx2}>0:20</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    arrow: {
        marginTop: height(2.5),
        marginLeft: width(4),
        color: 'black'
    },
    container: {
        marginTop: height(8),
        marginHorizontal: width(7),
    },
    topic: {
        fontSize: 24,
        fontWeight: '500',
        color: '#120D26',
        fontFamily: 'Airbnb Cereal App'
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        color: '#120D26'
    },
    InputContainer: {
        marginTop: height(3.5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    InputBox: {
        fontSize: 24,
        fontWeight: '400',
        borderWidth: width(0.2),
        borderColor:'#747688',
        borderRadius: height(0.6),
        backgroundColor: 'white',
        color: '#747688',
        justifyContent: 'center',
        textAlign: 'center',
        width: width(12)
    },
    btn: {
        marginTop: height(5),
        marginHorizontal: width(3),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5669FF',
        borderRadius: width(4),
        justifyContent: 'center',
        height: height(8)
    },
    btnTxt: {
        color: 'white',
        fontSize: 16
    },
    btnIcon: {
        position: 'absolute',
        right: '8%',
        backgroundColor: '#3D56F0',
        borderRadius: 30,
        height: height(4),
        width: width(7),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtx: {
        marginTop: height(4),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtx1: {
        fontSize: 15,
        fontWeight: '400',
        color: '#120D26'
    },
    txtx2: {
        marginLeft: width(1),
        fontSize: 15,
        fontWeight: '400',
        color: '#5669FF'
    }
});
export default ClientVerification;