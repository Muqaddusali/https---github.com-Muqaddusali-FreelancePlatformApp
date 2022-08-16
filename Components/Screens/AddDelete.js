import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { height, width } from 'react-native-dimension'
import Entypo from 'react-native-vector-icons/Entypo'
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
            <Text style={styles.txtxxx}>{props.txt}
                <View style={styles.cross}>
                    <Entypo style={{color:'red'}} name={"cross"}/>
                </View>
            
            </Text>
        </View>
    </View>
}

export default function AddDelete({ navigation, navigation: { goBack } }) {
    const [options, setOptions] = useState([
        {
            title: 'Logo Designing'
        },
        {
            title: 'Graphic Designing',
        },
        {
            title: 'UI&UX'
        },
        {
            title: 'Video Editing'
        },
        {
            title: 'Animation'
        },
        {
            title: 'Social Media Marketing'
        },
        {
            title: 'Adobe Xd'
        },
        {
            title: 'Adobe illustrator'
        },
        {
            title: 'PhotoShop'
        },
        {
            title: 'Printing Designing'
        },

    ])
  return (
    <View>
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
            <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Services')}>
                <View style={styles.AddButton}>
                    <Text style={styles.AddButtontxt}>+ add new</Text>
                </View>
            </TouchableOpacity>

            <View style={{marginHorizontal: width(4), marginTop: height(3)}}>
                <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                    {
                        options.map((item, index) => {
                            return <TouchableOpacity key={index} onPress = {() => {
                                let newArray = options.filter(x => x.title !== item.title)
                                setOptions(newArray)
                                }}>
                                <Box txt = {item.title}/>
                                </TouchableOpacity>
                            })
                    }
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
    AddButton: {
        marginHorizontal: width(4),
        borderWidth: 1,
        alignSelf: 'flex-end',
        borderRadius: width(3),
        borderColor: '#5669FF',
        padding: width(4),
        backgroundColor: 'white'
    },
    AddButtontxt: {
        color: '#5669FF',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'poppins'
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
    },
    cross: {
        backgroundColor: 'white',
        borderRadius: width(3),
        position: 'absolute',
    }
})