import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const _layout = () => {
  return (
    
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "#ffffff",
        headerStyle: {
             backgroundColor: "#ff0000"
        },

        headerTintColor: "#ffffff",
        tabBarStyle: {
             backgroundColor: "#808080"
        },

   }}>
        <Tabs.Screen name="index" options={{
             title: "Home", 
             headerShown:false,
             tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
           )
        }} />
        <Tabs.Screen name="about" options={{ title: "About" ,
             tabBarIcon: ({ color }) => (
                <AntDesign name="profile" size={24} color="black" />
           )
        }}
        
        />
        <Tabs.Screen name="profile" options={{ title: "Profile",
             tabBarIcon: ({ color }) => (
                <FontAwesome6 name="face-dizzy" size={24} color="black" />
           )
         }} />
   </Tabs>
    
  )
}

export default _layout