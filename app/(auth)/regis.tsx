import { View, Text,StyleSheet,TextInput, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:"center", gap:20}}>
      <TextInput placeholder='Enter Email'
      keyboardType='email-address'
      style={design.input}
      />
      
      <TextInput placeholder='Enter password' style={design.input}/>
      <TextInput placeholder='  Confirm password' style={design.input}/>
      <Button title='Register'/>
      <Text>Already have an account?<Link href="/regis" style={{color:"blue"}}> Login</Link></Text>
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