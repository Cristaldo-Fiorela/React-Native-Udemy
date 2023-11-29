import React from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react';
import FloatBtn from '../components/FloatBtn';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container}>
            <Text style={ styles.title }>
                Contador: {contador}
            </Text>

            <FloatBtn 
                title="+1"
                onPress={() => setContador(contador + 1)}
            />

            <FloatBtn 
                title="-1"
                onPress={() => setContador(contador - 1)}
            />


            {/* <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                style={ styles.floatBtnLocationL }
            >
                <View style={ styles.floatBtn } >
                    <Text style={ styles.floatBtnText }>-1</Text>
                </View>
            </TouchableOpacity> */}
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
})