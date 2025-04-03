import { Link } from "expo-router";
import { Text, View, StyleSheet, StatusBar } from "react-native";

export default function Index() {
  return (
    <View style={{
      backgroundColor:"black",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    }}  >
<StatusBar hidden/>

      <Text style={styles.text}>Hello !!</Text>

<Text style={styles.text}>This is React native!!</Text>
{/* <Link href={"/about"} style={{fontSize:25, margin:15 } }>About</Link>*/}
<Link href={"./(tabs)"} style={{fontSize:25, margin:15, borderStyle:"solid", borderRadius:15,width:190, backgroundColor:"#bb7f40", padding:15}}> Tabs</Link> 
<Link href={"./(auth)"} style={{fontSize:25, margin:15, borderStyle:"solid", borderRadius:15,width:200, backgroundColor:"#bb7f40", padding:15}}> Login/register</Link>
<Link href={"./(drawer)"} style={{fontSize:25,margin:15, borderStyle:"solid",width:190, borderRadius:15, backgroundColor:"#bb7f40",padding:15}}> Drawer</Link>

    </View>

  );
}


const styles = StyleSheet.create({
  text:{
    color:"white",
      fontSize:35,
      fontWeight:"bold"
  },

 
  
})


