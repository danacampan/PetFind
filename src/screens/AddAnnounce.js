import * as ImagePicker from "expo-image-picker";
import {Button, Text, TextInput, TouchableOpacity, View, Image, Pressable} from "react-native";
import KSpacer from "../components/KSpacer";
import React, {useContext, useState} from "react";
import {MyContext} from "../contexts/myContext";

function AddAnnounce ({ onSubmit, navigation }) {

    const {petList, setPetList} = useContext(MyContext);
    const [image, setImage] = useState(null);

    const [petInfo, setPetInfo] = useState({
        name: '',
        color: '',
        breed: '',
        lastSeenOn: '',
        details: '',
        photo: null,
    });
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log("ImagePicker result:", result);
        /*if (!result.canceled) {
            setPetInfo({...petInfo, photo: result.uri});
        }*/
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setPetInfo({...petInfo, photo: result.assets[0].uri});
        }
    };

    const handleSubmit = () => {
        setPetList([...petList, petInfo]);
        navigation.navigate("Home");
    };


    return <View style={{flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#FCE5E5'}}>

        <View style={{backgroundColor: '#FFFFFF', borderRadius: 10, width: 300, padding: 15}}>
            <TextInput style={{fontFamily: 'Serific', fontSize: 20}}
                placeholder="Pet Name"
                value={petInfo.name}
                onChangeText={(text) => setPetInfo({ ...petInfo, name: text })}
            />
            <KSpacer h={14}/>
            <TextInput style={{fontFamily: 'Serific', fontSize: 20}}
                placeholder="Pet Color"
                value={petInfo.color}
                onChangeText={(text) => setPetInfo({ ...petInfo, color: text })}
            />
            <KSpacer h={14}/>
            <TextInput style={{fontFamily: 'Serific', fontSize: 20}}
                placeholder="Pet Breed"
                value={petInfo.breed}
                onChangeText={(text) => setPetInfo({ ...petInfo, breed: text })}
            />
            <KSpacer h={14}/>
            <TextInput style={{fontFamily: 'Serific', fontSize: 20}}
                placeholder="Last seen on"
                value={petInfo.lastSeenOn}
                onChangeText={(text) => setPetInfo({ ...petInfo, lastSeenOn: text })}
            />
            <KSpacer h={14}/>
            <TextInput style={{fontFamily: 'Serific', fontSize: 20}}
                placeholder="Details"
                value={petInfo.details}
                onChangeText={(text) => setPetInfo({ ...petInfo, details: text })}
            />
            <KSpacer h={14}/>
            <TouchableOpacity onPress={handleImagePicker}>
                <Text style={{fontFamily: 'Serific', fontSize: 20}}>Choose a Photo</Text>
            </TouchableOpacity>
            <KSpacer h={20}/>
            {petInfo.photo && <Image source={{ uri: petInfo.photo }} style={{ width: 200, height: 200, marginBottom: 20 }} />}

            <Pressable style={{ backgroundColor: '#F0B5B5', padding: 10, borderRadius: 10,width: 150,marginLeft: 50}} onPress={handleSubmit}>
                <Text style={{ fontFamily: 'Serific', fontSize: 24, padding: 5, marginLeft: 25 }}>Submit</Text>
            </Pressable>


        </View>

    </View>
    }
export default AddAnnounce;