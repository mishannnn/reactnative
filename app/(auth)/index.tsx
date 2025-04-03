import { View, Text,StyleSheet,TextInput, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'


const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:"center", gap:20}}>
      <Text>Email:</Text>
      <TextInput placeholder='Enter Email'
      keyboardType='email-address'
      style={design.input}
      />
      <Text>Password:</Text>
      <TextInput placeholder='Enter password' style={design.input}/>
      <Button title='Login'/>
      <Text>Don't have an account?<Link href="/regis" style={{color:"blue"}}> Create one</Link></Text>
    </View>
  )
}

const design = StyleSheet.create({
  input: {
    backgroundColor:"white",
    width:150
  }
})

export default index