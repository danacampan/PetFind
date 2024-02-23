import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import KSpacer from "./src/components/KSpacer";
import StartScreen from "./src/screens/StartScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AnnounceScreen from "./src/screens/AnnounceScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

function AddAnnounce({ navigation }) {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Add Announce</Text>
  </View>
}
export default function App() {
  const isLoggedIn = false;
   const [fontsLoaded] = useFonts({
        'SecretCode': require('./assets/fonts/secrcode.ttf'),
    });

  return (
      <View style={{ flex: 1 }} onLayout={SplashScreen.hideAsync}>
           <NavigationContainer>
             {isLoggedIn ? <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Add" component={AddAnnounce} options={{presentation: 'modal'}}></Stack.Screen>
                <Stack.Screen name="Announce" component={AnnounceScreen}></Stack.Screen>
                <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
             </Stack.Navigator> :

             <Stack.Navigator>
               <Stack.Screen name="Login" component={StartScreen} />
               <Stack.Screen name="Register" component={RegisterScreen} />
             </Stack.Navigator>
             }
           </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
