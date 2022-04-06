import React, {useContext, useEffect, createContext, useState} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { onAuthStateChanged } from 'firebase/auth'
import { createStackNavigator } from '@react-navigation/stack'
import { auth } from '../config/firebase';
import DrawerStack from './DrawerStack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] =  useState(null);
    return (
        <AuthenticatedUserContext.Provider value={{user,setUser}}>
            { children }
        </AuthenticatedUserContext.Provider>
    )
}

const RN = () =>{
    const {user, setUser} = useContext(AuthenticatedUserContext);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, 
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
                setLoading(false)
            }
        );
        return () => unsuscribe();
    }, [user]);

    if(loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
    return(
        <NavigationContainer>
            { user ? <DrawerStack /> : <StackNavigation />}
        </NavigationContainer>
    )

}

export default function RootNavigation() {
    return (
    <AuthenticatedUserProvider>
        <RN />
    </AuthenticatedUserProvider>
    ) 
}