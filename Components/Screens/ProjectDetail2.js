import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {height, width} from 'react-native-dimension'
import { ScrollView } from 'react-native-gesture-handler'

const CommentComponent = (props)=>{
    return<View style={styles.commentContainer}>
        <View>
            <Image 
            style={styles.image2}
            source={props.imageUri}
            />
        </View>
        <View style={{marginLeft: '3%', width: '80%'}}>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.txt}>{props.text}</Text>
        </View>
    </View>
}
const ProjectDetail2 = ({navigation, navigation: {goBack}}) => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.upperContainer}>
            <AntDesign name={"arrowleft"} style={styles.arrow} size={25} onPress={() => goBack()}/>
            <Image 
            style={styles.image}
            source={require('../Assests/Rectangle19.png')}
            />
            <Text style={styles.upperHeading}>UI Design of Mobile App</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '5%'}}>
                <Text style={styles.upperTxt}>Mobile app ui Responsive prototype interactive demo</Text>
                <View style={styles.btn}>
                    <Text style={styles.btnTxt}>$500</Text>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%', marginTop: '5%'}}>
            <View style={styles.middlebtn}>
                <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('ProjectDetail1')}>
                <Text style={styles.middlebtnTxt}>Details</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.middlebtn, styles.blue]}>
                <TouchableOpacity activeOpacity={0.6}>
                <Text style={[styles.middlebtnTxt, styles.white]}>Comments</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <CommentComponent imageUri={require('../Assests/Ellipse152.png')} heading={'Simple Text'} text={'Hey, Hope you doing good. Can the budget be flexible?'} />
        <CommentComponent imageUri={require('../Assests/Ellipse152.png')} heading={'Simple Text'} text={'Hey, Hope you doing good. Can the budget be flexible?'} />
        <CommentComponent imageUri={require('../Assests/Ellipse152.png')} heading={'Simple Text'} text={'Hey, Hope you doing good. Can the budget be flexible?'} />
        
        <View style={styles.inputtxt}>
            <TextInput
            style={styles.txtx}
            placeholderTextColor={'black'}
            placeholder='Write your comment...' />
        </View>
      
    </View>
  )
}

export default ProjectDetail2

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
    commentContainer:{
        marginTop: '7%',
        marginHorizontal: '5%',
        flexDirection: 'row',
    },
    image2: {
        width: width(9.5),
        height: height(5)
    },
    heading: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: '#5669FF'
    },
    txt: {
        fontWeight: '300',
        fontSize: 13,
        fontFamily: 'Poppins',
        color: '#AEAEAE'
    },
    inputtxt:{
        marginHorizontal: '5%',
        marginTop: '10%'
    },
    txtx: {
        fontWeight: '300',
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#AEAEAE',
        borderBottomWidth: width(0.2),
        paddingBottom: 0,
        color:'black'
    }
})