import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FloatBtn = () => {
    return (
        <>
            <TouchableOpacity
                onPress={ () =>console.log('CLICK')}
                style={ styles.floatBtnLocationR }
            >
                <View style={ styles.floatBtn } >
                    <Text style={ styles.floatBtnText }>+1</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default FloatBtn;

const styles = StyleSheet.create({
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
});