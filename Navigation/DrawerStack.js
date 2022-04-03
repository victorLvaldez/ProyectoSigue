import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import DrawerItems from './DrawerItems';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewPost from '../Screens/NewPost';
import Godfather from '../Screens/Godfather';
import Godson from '../Screens/Godson';
import AddGodfather from '../Screens/AddGodfather';
import AddGodson from '../Screens/AddGodson';
import SingUp from '../Screens/SingUp';

const Drawer = createDrawerNavigator();


function DrawerStack() {
  const navigation = useNavigation();
  return (
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <DrawerItems {...props} />}
        screenOptions={{
          headerTintColor: "#23225a",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        
      >
          <Drawer.Screen 
            name='NewPost'
            component={NewPost}
            options={({navigation, route}) => ({
              title: "Nueva publicación",
              
            })}
          />
          <Drawer.Screen 
            name = 'Godfather'
            component={Godfather}
            options={({navigation, route}) => ({
              title: "Padrinos",
              
            })}
          />

          <Drawer.Screen 
            name = 'AddGodfather'
            component={AddGodfather}
            options={({navigation, route}) => ({
              title: "Añadir Padrinos",
              
            })}
          />

          <Drawer.Screen 
            name = 'Godson'
            component={Godson} 
            options={({navigation, route}) => ({
              title: "Ahijados",
              
            })}
          />

          <Drawer.Screen 
            name = 'AddGodson'
            component={AddGodson}
            options={({navigation, route}) => ({
              title: "Añadir Ahijados",
              
            })}
          />

          <Drawer.Screen 
            name = 'SingUp'
            component={SingUp}
            options={({navigation, route}) => ({
              title: "Registro de usuarios",
              
            })}
          />

          <Drawer.Screen 
            name="Home" 
            component={HomeScreen}
            options= {{
              title: "Inicio",
              headerRight:(
                () => 
                <TouchableOpacity 
                  style={styles.rightIconContainer}
                  onPress={() => navigation.navigate('NewPost')}
                >
                  <Icon 
                    type='font-awesome-5'
                    name='edit'
                    color='#23225a'
                  />
                </TouchableOpacity>
              )
            }}  
          />

          
      </Drawer.Navigator>
  );
}

export default DrawerStack;

const styles = StyleSheet.create({
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
})