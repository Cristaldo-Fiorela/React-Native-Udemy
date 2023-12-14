import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexboxScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={ styles.caja1 }>Caja 1</Text>
        <Text style={ styles.caja2 }>Caja 2</Text>
        <Text style={ styles.caja3 }>Caja 3</Text>
    </View>
    )
}

export default FlexboxScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'space-around',
        // justifyContent: 'space-evenly',
        // alignItems: 'flex-start', //? sus hijos solo tienen el espacio minimo necesario para renderizar el contenido
        // alignItems: 'flex-end',
        // alignItems: 'center',
        //* EJERCICIO 1
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // flex: 3, // 3 + 2 + 1 = 6 <= DE ESTE TOTAL TOMO 3 UNIDADES o 1/3
        alignSelf: 'center', //? sirve para tener un comportamiento diferente al del padre.

    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // flex: 3,
        alignSelf: 'flex-start',
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        // flex: 1,
        alignSelf: 'flex-end',
    },
});