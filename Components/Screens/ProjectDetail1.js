import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {height, width} from 'react-native-dimension'

const ProjectDetail1 = ({route, navigation, navigation: {goBack}}) => {
    const { heading, text, destination, price, description } = route.params;
  return (
    <View style={styles.container}>

      <View style={styles.upperContainer}>
        <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>
        <Image 
        style={styles.image}
        source={destination}
        />
        <Text style={styles.upperHeading}>{heading}</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '5%'}}>
            <Text style={styles.upperTxt}>{text}</Text>
            <View style={styles.btn}>
                <Text style={styles.btnTxt}>{price}</Text>
            </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', width: '100%', marginTop: '5%'}}>
        <View style={[styles.middlebtn, styles.blue]}>
            <TouchableOpacity activeOpacity={0.6}>
            <Text style={[styles.middlebtnTxt, styles.white]}>Details</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.middlebtn}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('ProjectDetail2')}>
            <Text style={styles.middlebtnTxt}>Comments</Text>
            </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerHeading}>Description</Text>
        <View>
            <Text style={styles.lowerTxt}>{description}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%'}}>
            <View style={styles.lowerbtn}>
                <TouchableOpacity onPress={()=> navigation.navigate('Client')} activeOpacity={0.6}><Text style={styles.lowerbtnTxt}>Comment</Text></TouchableOpacity>
            </View>
            <View style={[styles.lowerbtn, styles.blue]}>
                <TouchableOpacity onPress={()=> navigation.navigate('Client')} activeOpacity={0.6}><Text style={[styles.lowerbtnTxt, styles.white]}>Bid</Text></TouchableOpacity>
            </View>
        </View>
      </View>

    </View>
  )
}

export default ProjectDetail1

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer:{
        marginHorizontal: '5%'
    },
    arrow: {
        marginTop: height(2.5),
        color: 'black'
    },
    image: {
        width: '100%',
        height: height(21),
        marginTop: '4%'
    },
    upperHeading:{
        marginTop: '6%',
        fontWeight: '500',
        fontFamily:'Poppins',
        fontSize: 15,
        color: '#5669FF'
    },
    upperTxt: {
        width: '40%',
        color: 'black',
        fontWeight: '400',
        fontFamily:'Poppins',
        fontSize: 14,
    },
    btn:{
        borderWidth: width(0.2),
        paddingHorizontal: '13%',
        height: height(6),
        justifyContent: 'center',
        borderRadius: width(3),
        borderColor: '#5669FF',
        backgroundColor: '#EEF0FF',
    },
    btnTxt: {
        fontWeight: '700',
        fontFamily:'Poppins',
        fontSize: 15,
        color: '#5669FF'
    },
    middlebtn: {
        borderWidth: width(0.2),
        borderColor: '#5669FF',
        width: '50%',
        height: height(5),
        justifyContent: 'center',
    },
    middlebtnTxt:{
        textAlign: 'center',
        color: '#5669FF',
        fontFamily: 'poppins',
        fontSize: 13,
        fontWeight: '400'
    },
    blue: {
        backgroundColor: '#5669FF'
    },
    white:{
        color: 'white'
    },
    lowerContainer: {
        marginTop: '5%',
        marginHorizontal: '5%'
    },
    lowerHeading:{
        color: '#5669FF',
        fontFamily: 'poppins',
        fontSize: 16,
        fontWeight: '600'
    },
    lowerTxt: {
        width: '100%',
        lineHeight: 25,
        color: '#000000',
        fontFamily: 'poppins',
        fontSize: 12,
        fontWeight: '400'
    },
    lowerbtn:{
        borderWidth: width(0.2),
        borderColor: '#5669FF',
        width: '45%',
        height: height(6),
        justifyContent: 'center',
        borderRadius: width(3)
    },
    lowerbtnTxt: {
        color: '#5669FF',
        fontFamily: 'poppins',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center'
    }
})