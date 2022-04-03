import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native'
import PSButton from '../Components/PSButton'
import PSPost from '../Components/PSPost'

const HomeScreen = ({ navigation }) => {

    const handleLogOut = () => {
        //auth()
          //  .signOut()
           // .then(() => {
                console.log('Sale')
           // })
           // .catch(error => alert(error.message))
    }

    return (
        <ScrollView style={styles.container}>
            <PSPost 
                Title = "Prueba"
                Description = "Prueba de descripcion"
                Image = 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'
            />
            <PSPost 
                Title = "Nam fermentum"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et suscipit nibh. Maecenas at fermentum eros, at sagittis ligula. Nulla placerat quis lorem vel elementum. Suspendisse interdum lectus vitae nisi dictum convallis."
            />
            <PSPost 
                Title = "Nam lobortis justo ut"
                Description = "Morbi nec bibendum augue."
                Image = "https://www.collinsdictionary.com/images/full/cat_156310937.jpg"
            />
            <PSPost 
                Title = "Quisque tristique"
                Description = "Phasellus dignissim ultrices turpis ut fermentum. Duis malesuada eros ac ex gravida faucibus. Suspendisse quis ante et velit tristique efficitur. Sed fermentum magna ac tempor ultricies. Etiam elementum dolor eget felis aliquam, sed rhoncus ante auctor. Vivamus aliquam varius nunc, ut finibus nunc auctor vitae. Etiam ligula elit, laoreet sed ligula ut, lacinia scelerisque felis."
                Image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'
            />
        </ScrollView>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    buttonContainer:{
        paddingHorizontal: "25%",
        paddingVertical: 10,
    },
    container: {
        backgroundColor: '#BABABA',
        height: '100%'  
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
