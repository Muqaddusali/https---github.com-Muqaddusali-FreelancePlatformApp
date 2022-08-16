import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { height, width } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign'


const MessageComponent = ({handleNavigation,imageUri, userName, hours, txt})=>{
    return<TouchableOpacity activeOpacity={0.6} style={styles.MessageComponentContainer} onPress={() => handleNavigation(userName, imageUri)}>
        <View>
            <Image
            source={imageUri}
            style={styles.image}
            />
        </View>
        <View style = {styles.parentHeadingContainer}>
            <View style={styles.headingContainer}>
                <View><Text style={styles.heading}>{userName}</Text></View>
                <View><Text style={styles.hours}>{hours} Hours ago</Text></View>
            </View>
            <View>
                <Text style={styles.txtline}>{txt}</Text>
            </View>
        </View>
    </TouchableOpacity>
}

const Chats = ({ navigation}) => {
    const moveNext = (user, image) => {
        navigation.navigate('SubChat', {
            user: user,
            image: image
        })
    }
  return (
    <View style={styles.Container}>

      <AntDesign name={"arrowleft"} style={styles.arrow} size={23} onPress={()=> navigation.navigate('TabNavigation')}/>

      <View style={styles.UpperTxtContainer}>

        <TouchableOpacity activeOpacity={0.6}>
            <Text style={[styles.UpperTxt, styles.Active]}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('Notifications')}>
            <Text style={styles.UpperTxt}>Notifications</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.border}></View>

      <View style={styles.newConatiner}>

        <Text style={styles.newTxt}>New</Text>
        <View style={styles.numberContainer}><Text style={styles.number}>2</Text></View>

      </View>

      <View>
        <MessageComponent handleNavigation={moveNext} imageUri={require('../Assests/Ellipse152.png')} userName={'The Workers'} hours={2} txt={'Yes this is possible. I will take care of it as well.'} />
        <MessageComponent handleNavigation={moveNext} imageUri={require('../Assests/Ellipse152.png')} userName={'The Workers'} hours={2} txt={'Yes this is possible. I will take care of it as well.'}/>
        <MessageComponent handleNavigation={moveNext} imageUri={require('../Assests/Ellipse152.png')} userName={'The Workers'} hours={2} txt={'Yes this is possible. I will take care of it as well.'}/>
        <MessageComponent handleNavigation={moveNext} imageUri={require('../Assests/Ellipse152.png')} userName={'The Workers'} hours={2} txt={'Yes this is possible. I will take care of it as well.'}/>
        <MessageComponent handleNavigation={moveNext} imageUri={require('../Assests/Ellipse152.png')} userName={'The Workers'} hours={2} txt={'Yes this is possible. I will take care of it as well.'}/>
      </View>

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: height(3.5),
        backgroundColor: '#eeeeee'
    },
    arrow: {
        marginLeft: width(4),
        color: 'black'
    },
    UpperTxtContainer: {
        marginTop: height(3),
        marginHorizontal: width(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    UpperTxt:{
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '400',
        marginBottom: height(2),        
    },
    Active: {
        width: width(50)
    },
    border: {
        borderBottomWidth: width(1),
        width: width(55),
        borderBottomColor: '#3D56F0',
    },
    newConatiner: {
        marginHorizontal: width(5),
        marginTop: height(3),
        flexDirection: 'row',
    },
    newTxt: {
        color: 'black',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 15,
        textAlignVertical: 'center'
    },
    numberContainer: {
        backgroundColor:'#EEF0FF',
        width: width(10),
        height: height(5),
        borderRadius: width(6),
        marginLeft: width(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: 'black',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 15,
    },
    MessageComponentContainer: {
        flexDirection: 'row',
        marginHorizontal: width(4),
        marginTop: height(3)
    },
    image: {
        height: height(6),
        width: width(13),
    },
    parentHeadingContainer: {
        marginLeft: '3%',
        width: '75%',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    heading: {
        color: 'black',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 15,
    },
    hours: {
        color: '#5669FF',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 10,
    },
    txtline: {
        color: 'black',
        fontFamily: 'Inter',
        fontWeight: '300',
        fontSize: 12
    }
    
})
