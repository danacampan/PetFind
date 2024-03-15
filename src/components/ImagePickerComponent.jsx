import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, Text, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
    <Pressable style={{backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10}} onPress={pickImage}>
        <Text style={{fontFamily:'SecretCode', fontSize:18, padding:5}}>Pick an image of your animal
        </Text>
    </Pressable>
    );
}