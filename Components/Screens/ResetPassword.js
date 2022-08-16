import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from "react-native-dimension";

const ResetPassword = ({ navigation, navigation: { goBack } }) =>{
    return(
        <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
            <AntDesign name={"arrowleft"} style={style.arrow} size={20} onPress={() => goBack()}/>
            <View style={style.container}>
                <Text style={style.topic}>Reset Password</Text>
                <View style={{marginTop: height(2)}}>
                    <Text style={style.text}>Please enter your email address to</Text>
                    <Text style={style.text}>Request password reset</Text>
                </View>
                <View style={style.txtInput}>
                    <Image
                        style={style.profilePic}
                        source={require('../Assests/Message.png')}
                    />
                    <TextInput
                            style={style.inputBox} 
                            placeholder="abc@email.com"
                            placeholderTextColor='#747688'
                        />
                </View>
                
                <TouchableOpacity activeOpacity={0.8} style={style.btn} onPress={()=> navigation.navigate('Verification')}>
                    <Text style={style.btnTxt}>Submit</Text>
                    <View  style={style.btnIcon}>
                        <AntDesign name={"arrowright"} size={20} color={'white'}/>
                    </View>
                </TouchableOpacity>
                
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
    btn: {
        marginTop: height(4),
        marginHorizontal: width(4),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5669FF',
        borderRadius: width(4),
        justifyContent: 'center',
        height: height(8)
    },
    txtInput: {
        flexDirection: 'row',
        marginTop: '6%',
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 12,
        paddingLeft: '3%',
        alignItems: 'center',
        color: 'black',

    },
    profilePic: {
        width: width(5),
        height: height(3)
    },
    inputBox: {
        marginLeft: '3%',
        fontSize: 14,
        fontWeight: '400',
        width: width(70),
        height: height(8),
        color: 'black'
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
})
export default ResetPassword;