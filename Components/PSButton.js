//botón para proyecto sigue.
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { windowWidth, windowHeight } from '../Utils/Dimentions';

const PSButton = ({ buttonTitle, clickButton, height, ...rest }) => {
    return (
        <TouchableOpacity
            style={styles.login_button}
            onPress={clickButton}
            {...rest}
        >
            <Text style={styles.login_text}> {buttonTitle} </Text>
        </TouchableOpacity>
    );
}

export default PSButton;

const styles = StyleSheet.create({

    login_button: {
        alignItems: 'center',
        borderColor: "#23225a",
        borderRadius: 5,
        borderWidth: 1,
        height: windowHeight / 17,
        justifyContent: 'center',
        width: '100%',
        ...Platform.select({
            android: {
                backgroundColor: "#23225a",
            }
        })
    },
    login_text: {
        ...Platform.select({
            android: {
                color: "#ffffff"
            },
            ios: {
                color: "#23225a",
            }
        })
    },
});

