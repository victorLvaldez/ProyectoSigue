import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import DrawerStack from './DrawerStack';
import Godfather from '../Screens/Godfather';


const Stack = createStackNavigator();


export default function StackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}
