import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DimensionesScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaNaranja }></View>
            <View style={ styles.cajaMorada }></View>
        </View>
    )
}

export default DimensionesScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    }
});