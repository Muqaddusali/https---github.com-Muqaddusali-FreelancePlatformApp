import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Notifications from '../Screens/Notifications';
import Filter from '../Screens/Filter';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'



const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{ 
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarIcon: ()=>(
          <AntDesign name='home' size={25}  color="#5669FF"/>
        )
        }}/>
      <Tab.Screen name="Notifications" component={Notifications} 
      options={{ 
        headerShown: false,
        animation: 'slide_from_right',
        tabBarShowLabel: false,
        tabBarIcon: ()=>(
          <Ionicons name='notifications' size={25} color="#5669FF"/>
        )
         }} />
      <Tab.Screen name="Filter" component={Filter} 
      options={{ 
        headerShown: false,
        animation: 'slide_from_right',
        tabBarShowLabel: false,
        tabBarIcon: ()=>(
          <Ionicons name='options' size={25} color="#5669FF"/>
        )
         }}
      />
      <Tab.Screen name="About" component={About} 
      options={{ 
        headerShown: false,
        tabBarShowLabel: false,
        animation: 'slide_from_right',
        tabBarIcon: ()=>(
          <Feather name='user' size={25} color="#5669FF"/>
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation