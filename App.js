import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import KSpacer from "./src/components/KSpacer";
import StartScreen from "./src/screens/StartScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import * as ImagePicker from 'expo-image-picker';
import AddAnnounce from "./src/screens/AddAnnounce";
import {MyContext} from "./src/contexts/myContext";
import * as SecureStore from 'expo-secure-store';
import FoundScreen from "./src/screens/FoundScreen.js";
import PictureScreen from "./src/screens/PictureScreen.js";
import PreviewScreen from "./src/screens/PreviewScreen.js";


SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();


export default function App() {



    const [petList, setPetList] = useState([]);
    const isLoggedIn = true;
    const [fontsLoaded] = useFonts({
        'SecretCode': require('./assets/fonts/secrcode.ttf'),
        'Serific': require('./assets/fonts/Sanseriffic.otf'),
    });

  return (

      <View style={{ flex: 1 }} onLayout={SplashScreen.hideAsync}>
          <MyContext.Provider  value={{
              petList, setPetList
          }}>
           <NavigationContainer>
             {isLoggedIn ?  <Stack.Navigator>
                     <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                     <Stack.Screen name="Add" component={AddAnnounce} options={{presentation: 'modal'}}></Stack.Screen>
                     <Stack.Screen name="Found" component={FoundScreen}></Stack.Screen>
                     <Stack.Screen name="Picture" component={PictureScreen}></Stack.Screen>
                     <Stack.Screen name="Preview" component={PreviewScreen}></Stack.Screen>
                 </Stack.Navigator>
                  :
                 <Stack.Navigator>
                 <Stack.Screen name="Login" component={StartScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>

             }
           </NavigationContainer>
          </MyContext.Provider>
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
