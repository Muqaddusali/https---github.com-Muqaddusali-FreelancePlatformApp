import { View, Text, Image, StyleSheet, TouchableOpacity , TextInput, ScrollView } from 'react-native'
import React from 'react'
import {height, width} from 'react-native-dimension'
import AntDesign  from 'react-native-vector-icons/AntDesign'
const EditAbout = ({navigation, navigation: { goBack } }) => {
  return (
    <View style={{marginHorizontal: height(4)}}>
        <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center', marginTop: height(10)}}>
                <Image
                style={styles.image}
                source={require('../Assests/image89.png')}
                />
                <Text style={styles.text}>David Silba</Text>
            </View>

            <View style={styles.heading}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('About')}>
                    <Text style={[styles.txt, styles.txtx]}>ABOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('ServicesTwo')}>
                    <Text style={styles.txt}>SERVICES</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Reviews')}>
                    <Text style={styles.txt}>REVIEWS</Text>
                </TouchableOpacity>
            </View> 

            <View>
                <View style={styles.Info}>
                    <TextInput  style={{height:height(20), alignItems:'center', color: 'black',textAlignVertical: 'top'}} placeholder='Type Your About Info here'
                    placeholderTextColor={'black'}
                    />
                </View>
                <View>
                    <Text style={styles.EditHeading}>Our Company</Text>
                    <TextInput 
                    style={styles.companyInputTxt}
                    placeholder='Type about your company here'
                    placeholderTextColor={'black'}
                    />
                </View>
            </View>
        </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
    arrow: {
        marginTop: height(2.5),
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
        marginTop: height(1),
        marginBottom: height(3)
    },
    Info: {
        borderWidth: 1,
        height: height(21),
    },
    EditHeading: {
        marginTop: height(2),
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '400',
        color: '#5669FF'
    },
    companyInputTxt: {
        marginTop: height(1),
        borderWidth: 1,
        height: height(25),
        textAlignVertical:'top',
    }
})
export default EditAbout