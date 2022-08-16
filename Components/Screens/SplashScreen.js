import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({navigation})=>{
    setTimeout ( ()=>{navigation.replace('ScreenOne');}, 3000)
    return(
        <View style={Styles.Conatiner}>
            <Text style={Styles.TextStyle}>LOGO</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        justifyContent: 'center',
    },
    TextStyle: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: '400',
        lineHeight: 62.19,
        fontFamily: 'Poppins',
        color: 'black'
    }
});
export default SplashScreen;