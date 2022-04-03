import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import PSInput from '../Components/PSInput';


export default function AddGodson() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [institution, setInstitution] = useState('');

    useEffect(() => {
    navigation.setOptions({
        headerLeft:  () => (
            <TouchableOpacity 
                style={styles.leftIconContainer}
                onPress={()=> navigation.navigate('Godson')}
            >
                <Icon 
                    type='feather'
                    name='arrow-left'
                    color='#23225a'
                    size={22}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity 
                style={styles.rightIconContainer}
                onPress={() => {console.log('Guardado')}}
            >
                <Icon 
                    type='font-awesome'
                    name='save'
                    color='#23225a'
                    size={22}
                />
            </TouchableOpacity>
        )
        
    });
}, [navigation]);


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>
                <PSInput
                    labelValue={name}
                    onChangeText={(name) => setName(name)}
                    placeholderText="Nombre"
                    iconType="font-awesome"
                    iconName="user"
                    autoCorrect={false}
                />
                <PSInput 
                    labelValue={email}
                    onChangeText={(email) => setEmail(email)}
                    placeholderText="Correo"
                    iconType="entypo"
                    iconName="email"
                    autoCorrect={false}
                />
                <PSInput 
                    labelValue={institution}
                    onChangeText={(institution) => setInstitution(institution)}
                    placeholderText="Institución"
                    iconType="font-awesome"
                    iconName="building-o"
                    autoCorrect={false}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10,
    },
    name: {
        color: '#23225a'
    },
    rightIconContainer: {
        marginRight: 15,
    },
    leftIconContainer: {
        marginLeft: 15,
    },
})