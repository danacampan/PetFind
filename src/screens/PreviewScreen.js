import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

export default function PreviewScreen({ navigation, route }) {
    const { photoUri } = route.params;

    const uploadPhoto = async (photoUri, location) => {
        const formData = new FormData();
        formData.append('photo', {
            uri: photoUri,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });
        formData.append('streetName', location);

        try {
            const response = await fetch('http://127.0.0.1/send_email.php', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: photoUri }} style={styles.image} />
            <View style={styles.buttonContainer}>
                <Button title="Take Another Picture" onPress={() => navigation.navigate('Picture')} />
                <Button title="Send" onPress={uploadPhoto}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});