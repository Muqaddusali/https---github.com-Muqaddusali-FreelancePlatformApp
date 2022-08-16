import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View ,TouchableOpacity,Text, Image,useWindowDimensions ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ClientSubChat= ({navigation, route}) =>{ 
  const [messages, setMessages] = useState([]);
  const {user, image}= route.params;
  const onSend = useCallback((messages = []) => 
  { 
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages)) }, [] );
    useEffect(() => 
    { 
      setMessages([
         { 
          _id: 1,
          text: 'Heyy',
          createdAt: new Date(),
          user: { 
            _id: 2,
            name: 'Muqaddus',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]) 
  }, [])

  const [notification, setNotification] = useState([
    {
      text: 'hello',
      type: 'user'

    },
    {
      text: 'hello',
      type: 'admin'
    },
  ])

  return (
    <View style={{height:'100%', width:'100%' ,backgroundColor:'#FFFFFF'}}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%',marginLeft:'2%' }}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
           <AntDesign name='arrowleft' color={'black'} size={30} />
        </TouchableOpacity>
       </View> 
       <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%', backgroundColor: '#FFFFFF' }}>
         <TouchableOpacity activeOpacity={0.6}>
           <Image source={image} style={{ height: 100, width: 100, borderRadius: 100 }} /> 
           <Text style={{color: '#3D56F0', fontSize: 15, fontFamily: 'Poppins'}}>{user}</Text>
          </TouchableOpacity> 
        </View> 
        <View style={{ width:'100%',height:2 , backgroundColor:'#F5F5F5',marginTop:'2%'}}></View> 
        <GiftedChat messages={messages} onSend={messages => onSend(messages)} user={{ _id: 1, }} isTyping={true} alwaysShowSend={true} renderUsernameOnMessage={true} showAvatarForEveryMessage={true} />
     </View>

  )
}

export default ClientSubChat;