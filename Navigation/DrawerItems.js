import { View, Text, Linking, StyleSheet, Image } from 'react-native'
import { Divider, Icon } from 'react-native-elements';
import React from 'react'
import {
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import { auth } from '../config/firebase';

export default function DrawerItems(props) {
  const navigation = useNavigation();

  return (
    <ScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View >
        <View style={styles.imageContainer}>
          <Image 
            source={require('../images/user.png')}
            style={styles.image}
          />
        </View>

        <Text style={styles.userName}>Victor Ruben Lopez Valdez</Text>

        <Divider />
        <DrawerItem        
          label="Inicio"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={() => navigation.navigate('Home')}
          icon= {(color) => <Icon color="#23225a" name='home' type='entypo' size={25} style={styles.icon}/>}
        />

        <DrawerItem        
          label="Mensajes"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={() => Linking.openURL('https://google.com/help')}
          icon= {(color) => <Icon color="#23225a" name='message' type='entypo' size={25} style={styles.icon}/>}
        />
        <DrawerItem      
          label="Padrinos"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={() => navigation.navigate('Godfather')}
          icon= {(color) => <Icon color="#23225a" name='user' type='font-awesome' size={25} style={styles.icon}/>}
        />
        <DrawerItem     
          label="Ahijados"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={() => navigation.navigate('Godson')}
          icon= {(color) => <Icon color="#23225a" name='child' type='font-awesome-5' size={25} style={styles.icon}/>}
        />
        <DrawerItem      
          label="Registro"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={() => {
            showMessage({
              message: "Aquí podrás registrar nuevos usuarios; Padrinos, Ahijados y Administradores. Sé precavido con el rol que le asignas al usuario.",
              type: "warning",
              autoHide: false,
            });
            navigation.navigate('SingUp')
          }}
          icon= {(color) => <Icon color="#23225a" name='user-plus' type='font-awesome' size={25} style={styles.icon}/>}
        />

      </View>
      <View>
        <DrawerItem         
          label="Salir"
          labelStyle={{ fontWeight: 'bold'}}
          onPress={ async () => {
            try{
              await auth.signOut();
            } catch (e){
              console.log(e)
            }
          }}
          icon= {(color) => <Icon color="#FF0000" name='log-out' type='entypo' style={styles.icon}/>}
        />
      </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  drawerContainer:{
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  icon: {
    width: 35,
  },
  imageContainer: {
    marginTop: 20,
    marginBottom:20,
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
  image:{
    width: 125,
    height: 125,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#23225a'
  },
  userName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  }

})