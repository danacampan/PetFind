import {Button, Text, TextInput, View} from "react-native";
import KSpacer from "../components/KSpacer";
import {useNavigation} from "@react-navigation/native";

function StartScreen() {
    const [text, onChangeText] = React.useState('');

    return <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <View style={{flexDirection:'row'}}>
            <Text>Email:</Text>
            <TextInput
                style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
                onChangeText = {onChangeText}
                value={text}

            />
        </View>
        <KSpacer/>
        <View style={{flexDirection:'row'}}>
            <Text>Password:</Text>
            <TextInput
                style={{backgroundColor: "red", width: 250, height: 30, borderRadius: 10}}
                onChangeText = {onChangeText}
                value={text}

            />
        </View>
        <KSpacer/>
        <Button title="log in"/>
        <KSpacer/>
        <Text>Don't have an account?</Text>
        <KSpacer/>
        <Button title="Make one now" onPress={() => navigation.navigate("Register")}/>
        <KSpacer/>
    </View>
}
export default StartScreen;