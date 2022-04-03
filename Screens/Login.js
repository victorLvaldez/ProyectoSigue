import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PSInput from '../Components/PSInput';
import PSButton from '../Components/PSButton';
import { Input } from 'react-native-elements';
//import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {

    const data = require('../Debug/Users.json')

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const login = () => {
        console.log("Click login button")
    }

    const handleLogin = () => {
       //creamos metodo de autenticación
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/image_login.png')}
                resizeMode="contain"
                />
            <PSInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="fontisto"
                iconName="email"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <PSInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Contraseñas"
                iconType="fontisto"//from icon pack
                iconName="locked"
                secureTextEntry={true}
            />

            <PSButton
                buttonTitle="Entrar"
                clickButton={() => navigation.navigate('DrawerStack') }
                />
            
        </View>
        </TouchableWithoutFeedback>
    );

}

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    image: {
        width: "100%",
    },
});