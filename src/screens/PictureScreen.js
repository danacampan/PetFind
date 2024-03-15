import React, { useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Button, StyleSheet, View } from 'react-native';

export default function PictureScreen({navigation}) {
    const [cameraReady, setCameraReady] = useState(false);
    const cameraRef = useRef(null);

    async function takePicture() {
        if (cameraRef.current && cameraReady) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                console.log('Photo taken:', photo);
                navigation.navigate('Preview', { photoUri: photo.uri });

            } catch (error) {
                console.error('Error taking picture:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={Camera.Constants.Type.back}
                onCameraReady={() => setCameraReady(true)}
            />
            <View style={styles.buttonContainer}>
                <Button title="Take Picture" onPress={takePicture} disabled={!cameraReady} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});
