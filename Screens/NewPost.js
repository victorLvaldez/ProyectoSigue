import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { windowWidth, windowHeight } from '../Utils/Dimentions';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


export default function NewPost() {
    const navigation = useNavigation();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    
    const handlePost = () => {
        console.log(title)
        console.log(description)
    }

    const handleBack = () => {
        navigation.navigate('Home')
        setTitle('')
        setDescription('')
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    style={styles.rightIconContainer}
                    onPress = {handlePost}
                >
                    <Text style={styles.rightHeaderText}>Guardar</Text>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity 
                    style={styles.leftIconContainer}
                    onPress={handleBack}
                >
                    <Icon 
                        type='font-awesome-5'
                        name='arrow-left'
                        color='#23225a'
                    />
                </TouchableOpacity>
            )
        });
    }, [description, title]);

    return (
        <ScrollView style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../images/no_image.png')}
            />
            
            <View>
                <Text style={styles.label}>Titulo</Text>
                <View style={styles.inputConainter}>
                    <TextInput 
                        style={[styles.input,{height: windowHeight / 16}]}
                        value={title}
                        onChangeText={(title) => setTitle(title)}
                        placeholderTextColor="#666"
                        />
                </View>
                <Text style={styles.label}>Descripción</Text>
                <View style={styles.inputConainter}>
                    <TextInput 
                        style={[styles.input,{height: windowHeight / 5,}]}
                        value={description}
                        onChangeText={(description) => setDescription(description)}
                        placeholderTextColor="#666"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10,
    },
    imageContainer:{
        borderWidth: 10,
        borderColor: '#23225a',
        width: '100%',
        height: '20%',
    },
    image: {
        width: '100%',
        height: 250,
        borderWidth: 2,
        borderColor: '#23225a',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    inputConainter: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        borderColor: '#23225a',
        borderRadius: 3,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label:{
        fontSize: 20,
        textAlign: 'left',
        color: '#23225a',
        fontWeight: 'bold'
    },
    rightIconContainer: {
        marginRight: 15,
    },
    leftIconContainer: {
        marginLeft: 15,
    },
    rightHeaderText:{
        fontSize:16,
        color:'#23225a',
        fontWeight: 'bold'
    }
});