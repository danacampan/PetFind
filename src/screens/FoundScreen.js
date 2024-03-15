import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

const { APY_KEY } = Constants?.expoConfig?.extra || {};

export default function FoundScreen({navigation}) {
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 45.7489,
        longitude: 21.2087,
    });
    const [streetName, setStreetName] = useState('');

    const handleSendEmail = async () => {
        try {
            const response = await fetch('http://127.0.0.1/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ streetName: streetName }),
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('Success', data.message);
            } else {
                Alert.alert('Error', data.error);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            Alert.alert('Error', 'Failed to send email');
        }
    };

    const handleStreetNameSubmit = async () => {
        try {
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(streetName)}.json?access_token=${APY_KEY}`);
            const data = await response.json();
            if (data.features.length > 0) {
                const [longitude, latitude] = data.features[0].center;
                setMarkerPosition({ latitude, longitude });
            } else {
                console.log('No results found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 45.7489,
                    longitude: 21.2087,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={markerPosition}
                    title="Marker"
                    description={`Latitude: ${markerPosition.latitude}, Longitude: ${markerPosition.longitude}`}
                />
            </MapView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={streetName}
                    onChangeText={setStreetName}
                    placeholder="Enter street name"
                />
                <Button title="Find Location" onPress={handleStreetNameSubmit} />
                <Button title="Next" onPress={() => navigation.navigate("Picture")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    inputContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },
    input: {
        flex: 1,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
});
