import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import PSButton from './PSButton';


const SimplePost = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.props.Title}</Text>
            <Text style={styles.description}>{props.props.Description}</Text>
            <View style={styles.buttonContainer}>
                <PSButton 
                    buttonTitle="Comentar"
                />
            </View>
        </View>
    )
}

const ImagePost = (props) =>{
    url = props.props.Image;
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.props.Title}</Text>
            <Text style={styles.description}>{props.props.Description}</Text>
            <Image 
                source={{uri:url}}
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <PSButton 
                    buttonTitle="Comentar"
                />
            </View>
        </View>
    )
}

export default function PSPost(props) {
    const imagePost = props.Image;
    if(imagePost){
        return <ImagePost props={props}/>
    }
    return <SimplePost props={props}/>
}

const styles = StyleSheet.create({
    buttonContainer:{
        paddingHorizontal: "25%",
        paddingVertical: 10,
    },
    card: {
        borderTopColor: '#BABABA',
        borderTopWidth: 1,
        marginBottom: 10,
        width: "100%",
        backgroundColor: '#FFFFFF'
    },
    cardTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
    },
    description:{
        paddingHorizontal: 10,
        textAlign: 'justify'
    },
    image:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 10,
    },
});
