//inputs
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { windowWidth, windowHeight } from '../Utils/Dimentions';

const PSInput = ({ labelValue, placeholderText, iconType, iconName, isPassword, ...rest }) => {
    const [hidePass, setHidePass] = useState(true);



    if(isPassword){
        return (
            <View style={styles.inputConainter}>
            <View style={styles.iconStyle}>
                <Icon
                    name={iconName}
                    type={iconType}
                    size={20} 
                    color="#23225a"
                />
            </View>
            <TextInput
                style={styles.input}
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                secureTextEntry={hidePass ? true : false}
                {...rest}
            />
            <TouchableOpacity style={styles.iconStyle} onPress={() => { setHidePass(!hidePass)}}>
                <Icon
                    name={hidePass ? "eye-off" : "eye"}
                    type="feather"
                    size={20} 
                    color="#23225a"
                />
            </TouchableOpacity>
        </View>
        )
    }    
    return (
        <View style={styles.inputConainter}>
            <View style={styles.iconStyle}>
                <Icon
                    name={iconName}
                    type={iconType}
                    size={20} 
                    color="#23225a"
                />
            </View>
            <TextInput
                style={styles.input}
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
}

export default PSInput;

const styles = StyleSheet.create({
    inputConainter: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 17,
        borderColor: '#23225a',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        borderRightColor: '#23225a',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#23225a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    },
});