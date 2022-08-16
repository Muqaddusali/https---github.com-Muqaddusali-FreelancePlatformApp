import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";


const ScreenThree = ({navigation}) =>{
    // setTimeout ( ()=>{navigation.replace('SignIn');}, 3000)
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={Styles.ImageContainer}>
                <Image
                    style={{
                        width: 375,
                        height: 375
                    }}
                    source={require('../Assests/RectanglePirSaab.png')}
                />
            </View>

            <View style={Styles.bottomContainer}>

                <View style={Styles.bottomTopic}>
                    <Text style={Styles.bottomTopicText}>Topics</Text>
                </View>

                <View style={Styles.sliderConatiner}>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                        <Text style={Styles.SliderText}>Skip</Text>
                    </TouchableOpacity>

                    <View style={Styles.dots}>
                        <View style={Styles.oval}></View>
                        <View style={Styles.oval}></View>
                        <View style={Styles.txtss}></View>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={Styles.SliderText}>Next</Text>
                    </TouchableOpacity>

                </View>
            </View>   

        </View>
    )
}
const Styles = StyleSheet.create({
    ImageContainer: {
        height: '65%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    bottomContainer: {
        backgroundColor: '#5669FF',
        width: '100%',
        height: '35%',
        borderTopRightRadius: 48,
        borderTopLeftRadius: 48
    },
    bottomTopic: {
        alignItems: 'center',
        marginTop: '12%'
    },
    bottomTopicText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400'
    },
    sliderConatiner: {
        flexDirection: 'row',
        width: '80%',
        height: 34,
        marginRight: '10%',
        marginLeft: '10%',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: '15%',
    },
    SliderText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Inter'
    },
    txtss: {
        height: 8,
        width: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginLeft: 2
    },
    dots: {
        flexDirection: 'row',
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    oval: {
        height: 8,
        width: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        opacity: 0.2,
        marginLeft: 2
    },
})
export default ScreenThree;