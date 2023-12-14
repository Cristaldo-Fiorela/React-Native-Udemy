import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TareaScreen = () => {
    return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada} />
        <View style={ styles.cajaNaranja} />
        <View style={ styles.cajaAzul} />
    </View>
    )
}

export default TareaScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});