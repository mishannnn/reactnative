import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: "#bb7f40",
    },
    headerTintColor:"yellow"
  }}>
    <Stack.Screen name="index"/>
    <Stack.Screen name="./about/about"/>
    <Stack.Screen name="(tabs)" options={{ title: "" }} />
    <Stack.Screen name="login"/>
    <Stack.Screen name="regis"/>
    
    
  </Stack >;
  
}
