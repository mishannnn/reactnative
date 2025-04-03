import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: "black",
    },
  
  }}>
    <Stack.Screen name="index" options={{title:""}}/>
    <Stack.Screen name="(tabs)" options={{ title: "" }} />
    <Stack.Screen name="(drawer)" options={{ title: "" }} />
    <Stack.Screen name="(auth)" options={{ title: "hi", headerShown:false }} />
    
    
    
    
  </Stack >;
  
}
