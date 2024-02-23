import React from "react";
import {Text, Button, TextInput, View, Pressable} from "react-native";
import KSpacer from "../components/KSpacer";
import {useNavigation} from "@react-navigation/native";
import MainIcon from "../components/MainIcon";



function StartScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');



    return <View style={{ flex: 1,
        backgroundColor: '#FFE4E4',
        flexDirection: 'column',

    }}>

        <View style={{marginLeft:100}}>
            <MainIcon/>
        </View>

        <View style={{flex: 1, height: 'auto', width:'auto', flexDirection: 'column', justifyContent: 'flex-start',alignItems: 'center',backgroundColor: "#FFFFFF", padding: 22, borderTopLeftRadius: 70}}>
            <Text style={{fontFamily:'SecretCode', color: '#000000', fontSize: 40}}>Login</Text>
            <KSpacer h={50}/>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontFamily:'SecretCode', fontSize:18}}>Email:</Text>
                <KSpacer h={14}/>
                <TextInput
                    style={{backgroundColor: "#EDEDED", width: 250, height: 30, borderRadius: 10}}
                    onChangeText = {onChangeEmail}
                    value={email}

                />
            </View>
            <KSpacer/>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontFamily:'SecretCode', fontSize:18}}>Password:</Text>
                <KSpacer h={14}/>
                <TextInput
                    style={{backgroundColor: "#EDEDED", width: 250, height: 30, borderRadius: 10}}
                    onChangeText = {onChangePassword}
                    value={password}

                />
            </View>
            <KSpacer h={14}/>
            <Pressable style={{backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10}}>
                <Text style={{fontFamily:'SecretCode', fontSize:18}}>Log in
                </Text>
            </Pressable>
            <KSpacer h={14}/>
            <Text style={{fontFamily:'SecretCode', fontSize:18}}>Don't have an account?</Text>
            <KSpacer/>

            <Pressable style={{backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10}} onPress={() => navigation.navigate("Register")}>
                <Text style={{fontFamily:'SecretCode', fontSize:18}}>Sign up
                </Text>
            </Pressable>
            <KSpacer/>
        </View>

    </View>
}
export default StartScreen;