import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import FlashMessage from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { CheckBox, Icon } from "react-native-elements";
import PSInput from "../Components/PSInput";
import RadioButtonRN from 'radio-buttons-react-native';
import { windowHeight } from "../Utils/Dimentions";



export default function SingUp() {
    const navigation = useNavigation();
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [age, setAge] = useState();
    const [inc, setInc] = useState('');
    const data = [
        {
            label: 'Administrador',
            value: 1,
        },
        {
            label: 'Padrino',
            value: 2,
        },
        {
            label: 'Ahijado',
            value: 3,
        }
    ];

    useEffect(() => {
        navigation.setOptions({
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
                labelValue={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholderText="Nombre completo"
                iconType="font-awesome"
                iconName="user"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PSInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Correo electrónico"
                iconType="fontisto"
                iconName="email"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PSInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Contraseña"
                iconType="fontisto"//from icon pack
                iconName="locked"
                isPassword={true}
            />
            <PSInput
                labelValue={age}
                onChangeText={(age) => setAge(age)}
                placeholderText="Edad"
                iconType="material-community"
                iconName="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
            />
            <PSInput
                labelValue={inc}
                onChangeText={(inc) => setInc(inc)}
                placeholderText="Institución / Compañia"
                iconType="font-awesome"
                iconName="building-o"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <RadioButtonRN
                data={data}
                selectedBtn={(e) => console.log(e)}
                activeColor="#23225a"
                boxDeactiveBgColor = "#00000000"
                deactiveColor = "#666"
                boxStyle = {styles.radioButtonBox}
            />

            <FlashMessage position="bottom" />
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
    radioButtonBox:{
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 3,
        height: windowHeight / 17,
    }

})