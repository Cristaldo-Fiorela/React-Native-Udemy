import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={styles.cajaMorada }/>
            <View style={styles.cajaNaranja }/>
            <View style={styles.cajaVerde }/>
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 400,
        height: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        // top: -50,
        // left: 100,
        // right:50
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        // top: -50,
        // left: 50
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject //? = position absolute + top 0 + bottom 0 + left 0 + right 0
    },
});