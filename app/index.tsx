import { Link } from "expo-router";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import About from "./about";

export default function Index() {
  return (
    <View style={{
      backgroundColor:"#f9c374",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    }}  >
<StatusBar hidden/>

      <Text style={styles.text}>Hello !!</Text>

<Text style={styles.text}>This is React native!!</Text>
<Link href={"/about"} style={{fontSize:25, margin:15 } }>About</Link>
<Link href={"./(tabs)"} style={{fontSize:25}}> Tabs</Link>
<Link href={"./login"} style={{fontSize:25}}> Login</Link>
<Link href={"./regis"} style={{fontSize:25}}> Register</Link>

    </View>

  );
}


const styles = StyleSheet.create({
  text:{
    color:"white",
      fontSize:35,
      fontWeight:"bold"
  }
  
})


