import React from "react";
import {Alert, Pressable, Text, TextInput, View} from "react-native";
import KSpacer from "../components/KSpacer";
import {useNavigation} from "@react-navigation/native";

function RegisterScreen({ navigation }) {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    //const [confirm, onChangeConfirm] = React.useState('');

    return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Username:</Text>
        <TextInput
            style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
            onChangeText = {onChangeUsername}
            value={username}

        />
        <KSpacer/>
        <Text>Password:</Text>
        <TextInput
            style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
            onChangeText = {onChangePassword}
            value={password}
            placeholder="parola"
            secureTextEntry

        />
        <KSpacer/>
        <Pressable style={{backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10}} onPress={handleRegister}>
            <Text style={{fontFamily:'SecretCode', fontSize:18, padding:5}}>Sign up
            </Text>
        </Pressable>

    </View>
}
export default RegisterScreen;