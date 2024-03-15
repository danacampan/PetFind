import React, { useContext } from "react";
import {Button, Text, View, Image, ScrollView, Pressable} from "react-native";
import KSpacer from "../components/KSpacer";
import { createStackNavigator } from "@react-navigation/stack";
import { MyContext } from "../contexts/myContext";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    const { petList } = useContext(MyContext);

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "#FCE5E5", padding: 10 }}>
            <Text style={{ fontFamily: "Serific", fontSize: 32, padding: 10 }}>Missing pets</Text>
            <KSpacer h={14}/>
            <ScrollView>
                <View>
                {petList.map((petInfo, index) => (
                    <View key={index} style={{backgroundColor: '#FFFFFF', padding: 20, alignItems: "center", marginBottom: 10, width: 350, borderRadius: 15 }}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                            <Text style={{ fontFamily: "Serific", fontSize: 25, marginLeft: 100, marginRight: 35}}>{petInfo.name}</Text>
                            <Pressable style={{backgroundColor: '#e8d241', padding: 5, borderRadius: 5, borderStyle: 'solid',borderWidth: 3, borderColor: '#fff7ab',width: 110, marginRight: -35}} onPress={() => navigation.navigate("Found")}>
                                <Text style={{color: '#75540c',fontFamily: 'Serific', fontSize: 16, padding: 5, marginLeft:10}}>FOUND IT!</Text>
                            </Pressable>
                        </View>
                        <KSpacer h={10}/>
                        {petInfo.photo && <Image source={{ uri: petInfo.photo }} style={{ width: 200, height: 200, borderRadius: 10 }} />}
                        <KSpacer h={10}/>
                        <Text style={{color: '#ffffff',fontFamily: "Serific",fontSize: 16, marginRight: 5, padding: 5, backgroundColor: '#f57f87', borderRadius:8, marginBottom: 5}}>Breed: {petInfo.breed}</Text>
                        <Text style={{color: '#ffffff',fontFamily: "Serific",fontSize: 16, marginRight : 5, padding: 5,backgroundColor: '#f57f87', borderRadius:8,marginBottom: 5}}>Color: {petInfo.color}</Text>
                        <Text style={{color: '#ffffff',fontFamily: "Serific",fontSize: 16, marginRight: 5,padding: 5,backgroundColor: '#f57f87', borderRadius:8,marginBottom: 5}}>Last seen on: {petInfo.lastSeenOn}</Text>
                        <Text style={{fontFamily: "Serific",fontSize: 20}}>Description: {petInfo.details}</Text>
                        <KSpacer h={12}/>

                    </View>
                ))}
                </View>
            </ScrollView>
            <KSpacer h={14}/>

            <Pressable style={{ backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10,width: 90}} onPress={() => navigation.navigate("Add")}>
                <Text style={{ fontFamily: 'Serific', fontSize: 20, padding: 5, marginLeft:10 }}>Add</Text>
            </Pressable>
        </View>
    );
}

export default HomeScreen;
