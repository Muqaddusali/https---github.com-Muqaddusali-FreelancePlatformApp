import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import {height, width} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from '../Assests/icon1.png'
import Icon2 from '../Assests/icon2.png'
import { useEffect } from 'react';

const NotificationComponent = () =>{
    const date = new Date()
    const [notification, setNotifications] =useState([
        {
            id: 1,
            text: 'Follow these best paractices for new sellers',
            type: 'admin',
            isRead: true,
            dateCreated: date.toLocaleString()
        },
        {
            id: 2,
            text: 'Your request is accepted for project of logo designing',
            type: 'user',
            isRead: false,
            dateCreated: date.toLocaleString()
        },
        {
            id: 3,
            text: 'Follow these best paractices for new sellers',
            type: 'admin',
            isRead: true,
            dateCreated: date.toLocaleString()
        },
        {
            id: 4,
            text: 'Your request is accepted for project of logo designing',
            type: 'user',
            isRead: false,
            dateCreated: date.toLocaleString()
        },
        {
            id: 5,
            text: 'Follow these best paractices for new sellers',
            type: 'admin',
            isRead: true,
            dateCreated: date.toLocaleString()
        },
        {
            id: 6,
            text: 'Your request is accepted for project of logo designing',
            type: 'user',
            isRead: false,
            dateCreated: date.toLocaleString()
        },
        {
            id: 7,
            text: 'Follow these best paractices for new sellers',
            type: 'admin',
            isRead: true,
            dateCreated: date.toLocaleString()
        },
        {
            id: 8,
            text: 'Your request is accepted for project of logo designing',
            type: 'user',
            isRead: false,
            dateCreated: date.toLocaleString()
        },
    ])
    useEffect(() => {
        let newArray = [];
        notification.map(item => {

            let date1 = new Date(item.dateCreated)
            let nowDate = new Date()
            const msBetweenDates = Math.abs(date1.getTime() - nowDate.getTime())
            const hoursBetweenDAtes = msBetweenDates / (60 * 60 * 1000);
            if(hoursBetweenDAtes < 24) {
                newArray.unshift({...item, isNew: 'new'})
            }else{
                newArray.push({...item, isNew: 'old'})
            }
        })
        setNotifications(newArray)
    }, [])
    
    return<View style = {{display: 'flex', flexDirection: 'column'}}>
        {
            notification.map(item => {
                return <View style={{flexDirection: 'row', marginHorizontal: width(4), backgroundColor: item.isRead === true ? 'white' : '#EEF0FF', marginTop: height(1)}}>
                    <View style={styles.icon}>
                        <Image
                        style={styles.image}
                        source={item.type === 'admin' ? Icon1 : Icon2}
                        />
                    </View>
                    <View style={{marginLeft:width(2)}}>
                        <Text style={styles.txt}>{item.text}</Text>
                        <Text style={styles.hours}>4 hours ago</Text>
                    </View>
                </View>
            })
        }
    </View>
}

const ClientSideNotification = ({navigation, navigation: {goBack}}) => {
  return (
    <View style={styles.Container}>
      <AntDesign name={"arrowleft"} style={styles.arrow} size={23} onPress={() => goBack()}/>

      <View style={styles.UpperTxtContainer}>

        <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('ClientChat')}>
            <Text style={[styles.UpperTxt, styles.Active]}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.UpperTxt}>Notifications</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.border}></View>

      <View style={styles.newConatiner}>

        <Text style={styles.newTxt}>New</Text>
        <View style={styles.numberContainer}><Text style={styles.number}>2</Text></View>

      </View>

      <NotificationComponent /> 

    </View>
  )
}

export default ClientSideNotification;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: height(3.5),
        backgroundColor: 'white'
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
        alignSelf: 'flex-end',
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
    icon: {
        backgroundColor: '#EEF0FF',
        justifyContent: 'center',
        borderRadius: width(5),
        padding: width(2)
    },
    image: {
        width: width(5),
        height: height(2)
    },
    txt: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Inter', 
        color: 'black'
    },
    hours: {
        color:'#5669FF',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Inter',
    }
})