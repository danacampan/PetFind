import React from "react";
import {Button, Text, View} from "react-native";

function HomeScreen({ navigation }) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Missing animals:</Text>
        <Button title="Add" onPress={() => navigation.navigate("Add")}/>
    </View>
}

export default HomeScreen;