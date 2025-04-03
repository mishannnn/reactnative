import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
const DrawerRoot = () => {
     return (
          <GestureHandlerRootView>
               <Drawer>
                    <Drawer.Screen name="index" options={{drawerLabel:'Home', title:"Overview",
                    drawerIcon: ({ color }) => (
                         <Ionicons name="accessibility" size={24} color="black" />
                    )

                    }}/>

                     <Drawer.Screen name="apps" options={{drawerLabel:'apps', title:"Overview",
                    drawerIcon: ({ color }) => (
                         <AntDesign name="appstore-o" size={24} color="black" />
                    )

                    }}/>

<Drawer.Screen name="random" options={{drawerLabel:'Help and support', title:"Overview",
                    drawerIcon: ({ color }) => (
                         <FontAwesome5 name="hands-helping" size={24} color="black" />
                    )

                    }}/>

<Drawer.Screen name="profile" options={{drawerLabel:'Your Profile', title:"Overview",
                    drawerIcon: ({ color }) => (
                         <AntDesign name="profile" size={24} color="black" />
                    )

                    }}/>

<Drawer.Screen name="settings" options={{drawerLabel:'Settings', title:"Overview",
                    drawerIcon: ({ color }) => (
                         <Feather name="settings" size={24} color="black" />
                    )

                    }}/>

               </Drawer>

          </GestureHandlerRootView>

     )
}

export default DrawerRoot