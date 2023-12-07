import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={styles.cajaMorada }/>
            <View style={styles.cajaNaranja }/>
        </View>
    )
}

export default PositionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        right:50
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        top: -50,
        left: 50
    }
});