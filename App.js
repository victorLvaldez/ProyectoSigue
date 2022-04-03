import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Login from './Screens/Login';
import DrawerStack from './Navigation/DrawerStack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import StackNavigation from './Navigation/StackNavigation';
import NewPost from './Screens/NewPost';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
    //<NewPost />
  );
};

const styles = StyleSheet.create({

});

export default App;
