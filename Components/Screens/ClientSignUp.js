import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { height, width } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ClientSignUp = ({navigation})=> {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
        <View style={Styles.upperContainer}>
            <Text style={Styles.upperText}>Sign up</Text>
            <View style={Styles.txtInput}>
                    <Image
                        style={Styles.profilePic}
                        source={require('../Assests/Profile.png')}
                    />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400',width: '90%', color: '#747688'}} 
                        placeholder="Your name"
                        placeholderTextColor='#747688'
                  

                    />
            </View>
            <View style={Styles.txtInput}>
                    <Image
                        style={Styles.profilePic}
                        source={require('../Assests/Message.png')}
                    />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400',width: '90%', color: '#747688'}} 
                        placeholder="abc@email.com"
                        placeholderTextColor='#747688'
                    />
            </View>
            <View style={Styles.txtInput}>
                    <Image
                        style={Styles.profilePic} 
                        source={require('../Assests/Lock.png')}
                    />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400',width: '78%', color: '#747688'}} 
                        placeholder="Your password"
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
                <View style={Styles.txtInput}>
                    <Image
                        style={Styles.profilePic}
                        source={require('../Assests/Lock.png')}
                    />
                    <TextInput
                        style={{marginLeft: '3%', fontSize: 14, fontWeight: '400',width: '78%', color: '#747688'}} 
                        placeholder="Confirm password"
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
        </View>

        <View style={Styles.lowerContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('ClientVerification')} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#5669FF', borderRadius: 20, justifyContent: 'center', height: height(8)}}>
                    <Text style={{color: 'white', fontSize: 16}}>Submit</Text>
                    <View  style={{position: 'absolute', right: '8%', backgroundColor: '#3D56F0', borderRadius: 30, height: height(4), width: width(7), alignItems: 'center', justifyContent: 'center'}}>
                        <AntDesign name={"arrowright"} size={20} color={'white'}/>
                    </View>
                </TouchableOpacity>

                <View style={Styles.lastThrid}>

                    <TouchableOpacity activeOpacity={0.8} style={Styles.lastThirdx} onPress={()=> navigation.navigate('SignUp')}>
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
                    <Text style={Styles.Signuptxt}>Already have acount?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('ClientSignIn')}>
                        <Text style={Styles.Signuptxtx}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    upperContainer: {
        marginTop: height(7),
        marginHorizontal: width(8),
    },
    upperText: {
        fontSize: width(7),
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
        alignItems: 'center',
        color: '#747688'
    },
    profilePic: {
        width: width(5),
        height: height(3)
    },
    lowerContainer: {
        marginTop: height(5),
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
        paddingHorizontal: width(7),
        flexDirection: 'row',
        alignItems:'center'
    },
    imageIcon: {
        height: height(4),
        width: width(8)
    },
    textxx: {
        marginLeft: width(5),
        color: '#747688',
        fontSize: 16
    },
    Signup: {
        marginHorizontal: width(15),
        flexDirection: 'row',
        marginTop: height(3),
    },
    Signuptxt: {
        fontSize: width(4),
        color: '#747688'
    },
    Signuptxtx: {
        marginLeft: width(1),
        fontSize: width(4),
        color: '#3D56F0'
    }
})

export default ClientSignUp;