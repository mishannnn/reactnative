import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: "#bb7f40",
    },
    headerTintColor:"white",
    headerShown:false,
  }}>
    <Stack.Screen name="index" options={{title:""}}/>
    <Stack.Screen name="./about/about"/>
    <Stack.Screen name="(tabs)" options={{ title: "" }} />
    <Stack.Screen name="(drawer)" options={{ title: "" }} />
    <Stack.Screen name="login" options={{ title: "login" , headerShown:false}} />
    <Stack.Screen name="regis" options={{ title: "hi",headerShown:false }}/>
    
    
  </Stack >;
  
}
