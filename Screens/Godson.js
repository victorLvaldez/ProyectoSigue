import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Avatar, Icon, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Godson() {
    const navigation = useNavigation();


    const list = [
        {
            name: 'Ahijad@ 1',
            avatar_url: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png',
            subtitle: 'Padrino o institución'
        },
        {
        name: 'Ahijad@ 2',
            avatar_url: 'https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg',
            subtitle: 'Padrino o institución'
        },
        
    ]

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    style={styles.rightIconContainer}
                    onPress={() => navigation.navigate('AddGodson')}
                >
                    <Icon 
                        type='fontisto'
                        name='plus-a'
                        color='#23225a'
                        size={22}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    return (
        <ScrollView>
        {
            list.map((l, i) => (

                <ListItem key={i} bottomDivider>
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                        <ListItem.Title style = {styles.name}>{l.name}</ListItem.Title>
                        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron color="#23225a" onPress={() => {console.log(l.name)}} size={32}/>
                </ListItem>

            ))
        }
        </ScrollView>
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
})