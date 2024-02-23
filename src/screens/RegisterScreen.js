import React from "react";
import {Text, TextInput, View} from "react-native";
import KSpacer from "../components/KSpacer";

function RegisterScreen() {
    const [text, onChangeText] = React.useState('');
    return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Username:</Text>
        <TextInput
            style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
            onChangeText = {onChangeText}
            value={text}

        />
        <KSpacer/>
        <Text>Email:</Text>
        <TextInput
            style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
            onChangeText = {onChangeText}
            value={text}
            placeholder="parola"
        />
        <KSpacer/>
        <Text>Password:</Text>
        <TextInput
            style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
            onChangeText = {onChangeText}
            value={text}
            placeholder="parola"
        />
    </View>
}
export default RegisterScreen;