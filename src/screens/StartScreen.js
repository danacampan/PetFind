import React from "react";
import { Text, Button, TextInput, View, Pressable, Alert } from "react-native";
import KSpacer from "../components/KSpacer";
import { useNavigation } from "@react-navigation/native";
import MainIcon from "../components/MainIcon";
import { useFonts } from 'expo-font';
import { Platform, KeyboardAvoidingView } from 'react-native';

const StartScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('Login Successful');
                navigation.navigate('Home');
            } else {
                Alert.alert('Invalid Username or Password');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('An error occurred, please try again later');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFE4E4' }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={{ marginLeft: 100 }}>
                    <MainIcon />
                </View>
                <View style={{ flex: 1, height: 'auto', width: 'auto', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#FFFFFF", padding: 22, borderTopLeftRadius: 70 }}>
                    <Text style={{ fontFamily: 'SecretCode', color: '#000000', fontSize: 40, padding: 10, width: 150 }}>Login</Text>
                    <KSpacer h={50} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'SecretCode', fontSize: 18 }}>Username:</Text>
                        <KSpacer h={14} />
                        <TextInput
                            style={{ backgroundColor: "#EDEDED", width: 250, height: 30, borderRadius: 10 }}
                            onChangeText={setUsername}
                            value={username}
                        />
                    </View>
                    <KSpacer />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'SecretCode', fontSize: 18 }}>Password:</Text>
                        <KSpacer h={14} />
                        <TextInput
                            style={{ backgroundColor: "#EDEDED", width: 250, height: 30, borderRadius: 10 }}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                        />
                    </View>
                    <KSpacer h={14} />
                    <Pressable style={{ backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10}} onPress={handleLogin}>
                        <Text style={{ fontFamily: 'SecretCode', fontSize: 18, padding: 5, width: 90 }}>Login</Text>
                    </Pressable>
                    <KSpacer h={14} />
                    <Text style={{ fontFamily: 'SecretCode', fontSize: 18, padding: 10,width: 150 }}>Don't have an account?</Text>
                    <KSpacer h={14} />
                    <Pressable style={{ backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10, marginBottom: 20 }} onPress={() => navigation.navigate("Register")}>
                        <Text style={{ fontFamily: 'SecretCode', fontSize: 18, padding: 5,width: 100 }}>Sign up</Text>
                    </Pressable>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default StartScreen;
