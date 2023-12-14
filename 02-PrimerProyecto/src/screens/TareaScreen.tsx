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
        // * EJERCICIO 2
        // justifyContent: 'center',
        // * EJERCICIO 4
        // justifyContent: 'space-between',
        // * EJERCICIO 5
        // flexDirection: 'row',
        // * EJERCICIO 6 
        justifyContent: 'center',
        alignItems: 'center',
        // *EJERCICIO 10
        flexDirection: 'row'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // * EJERCICIO 3
        // alignSelf: 'flex-end',
        // * EJERCICIO 4
        // alignSelf: 'flex-end'
        // * EJERCICIO 5
        // // height: 100,
        // * EJERCICIO 6
        // flex: 2,
        // // width: 100,
        // * EJERCICIO 8
        // top: 100

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //* EJERCICIO 1
        // flex: 1
        // * EJERCICIO 4
        // alignSelf: 'center',
        // * EJERCICIO 5
        // // height: 100,
        // * EJERCICIO 6
        // flex: 2
        // // width: 100,
        // * EJERCICIO 7
        // left: 100
        // * EJERCICIO 10
        bottom: -50
    },
    cajaAzul: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // * EJERCICIO 2
        // // width: 100,
        // * EJERCICIO 3
        // alignSelf: 'center',
        // * EJERCICIO 5
        // // height: 100,    
        // * EJERCICIO 6
        // flex: 4,
        // // width: 100,
    },
});