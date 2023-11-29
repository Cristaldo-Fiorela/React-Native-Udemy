import React from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container}>
            <Text style={ styles.title }>
                Contador: {contador}
            </Text>

            <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                style={ styles.floatBtnLocationL }
            >
                <View style={ styles.floatBtn } >
                    <Text style={ styles.floatBtnText }>-1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
                style={ styles.floatBtnLocationR }
            >
                <View style={ styles.floatBtn } >
                    <Text style={ styles.floatBtnText }>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ContadorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -15
    },
    floatBtnLocationR: {
        bottom: 25,
        position: 'absolute',
        right: 25
    },
    floatBtnLocationL: {
        bottom: 25,
        position: 'absolute',
        left: 25
    },
    floatBtn: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
    },
    floatBtnText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
})