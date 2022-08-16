import React, {useState} from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {height, width} from 'react-native-dimension';
import styles from "rn-range-slider/styles";

const ClientSignIn = ({navigation}) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={{height: '100%', backgroundColor: '#eeeeee'}}>
            <View style={Styles.upperContainer}>
                <Text style={Styles.upperText}>Sign in</Text>

                <View style={Styles.txtInput}>
                    <AntDesign name="mail"  size={25} color="#807A7A"  />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400', width: '88%', color: '#747688'}} 
                        placeholder="abc@email.com"
                        placeholderTextColor='#747688'
                    />
                </View>
                
                <View style={Styles.txtInput}>
                    <AntDesign name="lock" size={25} color="#807A7A" />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400', width: '77%', color: '#747688'}} 
                        placeholder="your password"
                        placeholderTextColor='#747688'
                        secureTextEntry={visible}
                        
                    />
                    <TouchableOpacity
                    onPress={
                        ()=>{
                            setVisible(!visible)
                            setShow(!show)
                        }
                    }
                    >
                        <MaterialCommunityIcon name={show === false  ? 'eye-outline': 'eye-off-outline'} size ={20} color="#807A7A"/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: '5%', flexDirection: 'row', alignItems: 'center'}}>
                    <Switch
                        style={{position: 'absolute', left: 0,}}
                        trackColor={{false: "#767577", true: "#5669FF"}}
                        thumbColor={'white'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <TouchableOpacity style={{marginLeft: '20%', }}>
                    <Text style={{fontSize: 14, fontWeight: '400', color:'#120D26'}}>Remember Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('ClientResetPassword')}>
                        <Text style={{fontSize: 14, fontWeight: '400', color:'#120D26', marginLeft: '24%'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.lowerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ClientTabNav')} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#5669FF', borderRadius: 20, justifyContent: 'center', height: height(8)}}>
                    <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
                    <View  style={{position: 'absolute', right: '8%', backgroundColor: '#3D56F0', borderRadius: 30, height: height(4), width: width(7), alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name={"arrowright"} size={20} color={'white'}/>
                    </View>
                </TouchableOpacity>

                <View style={Styles.lastThrid}>

                    <TouchableOpacity activeOpacity={0.8} style={Styles.lastThirdx} onPress={()=> navigation.navigate('SignIn')}>
                        <Text style={{color: 'white', fontSize: 16}}>Company</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.lastThridView}
                     activeOpacity={0.8} 
                    >
                        <Text style={Styles.txtx} >Client</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity activeOpacity={0.8} style={Styles.lastSecond}>
                    <Image 
                        style={Styles.imageIcon}
                        source={require('../Assests/Group18559.png')}
                    />
                    <Text style={Styles.textxx}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={Styles.lastSecond}>
                    <Image 
                        style={Styles.imageIcon}
                        source={require('../Assests/Group18557Facebook.png')}
                    />
                    <Text style={Styles.textxx}>Login with FaceBook</Text>
                </TouchableOpacity>

                <View style={Styles.Signup}>
                    <Text style={Styles.Signuptxt}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('ClientSignUp')}>
                        <Text style={Styles.Signuptxtx}>Sign up</Text>
                    </TouchableOpacity>
                </View>




            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    upperContainer: {
        marginTop: height(17),
        marginHorizontal: width(8),
    },
    upperText: {
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'Airbnb Cereal App',
        color: '#120D26'
    },
    txtInput: {
        flexDirection: 'row',
        marginTop: '5%',
        borderWidth: 1,
        borderColor: '#E4DFDF',
        borderRadius: 12,
        paddingLeft: '3%',
        alignItems: 'center'
    },
    lowerContainer: {
        marginTop: height(6),
        marginHorizontal: width(10)
    },
    lastThrid: {
        marginTop: '8%',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    lastThridView: {
        width: width(32),
        height: height(6),
        borderWidth: width(0.5),
        borderColor: '#5669FF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    txtx: {
        fontSize: 16,
        fontWeight: '400',
        color: '#5669FF'
    },
    lastThirdx: {
        width: width(32),
        height: height(6),
        borderWidth: 1,
        borderColor: '#5669FF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5669FF'
    },
    lastSecond: {
        marginHorizontal: width(8),
        backgroundColor: 'white',
        marginTop: height(3),
        height: height(7),
        borderRadius: width(2),
        paddingLeft: width(7),
        flexDirection: 'row',
        alignItems:'center'
    },
    imageIcon: {
        height: height(4),
        width: width(8)
    },
    textxx: {
        marginLeft: width(5),
        color: '#120D26',
        fontSize: 16
    },
    Signup: {
        marginHorizontal: width(15),
        flexDirection: 'row',
        marginTop: height(3),
    },
    Signuptxt: {
        fontSize: width(4),
        color: '#120D26'
    },
    Signuptxtx: {
        marginLeft: width(1),
        fontSize: width(4),
        color: '#3D56F0'
    }

})
export default ClientSignIn;