import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    position: 'bottomR' | 'bottomL';
    title: String;
    onPress: () =>  void;
}

const FloatBtn = ({title, onPress, position = 'bottomR'}: Props) => {

    return (
        <TouchableOpacity
            onPress={ onPress }
            style={ 
                (position === 'bottomL')
                    ? styles.floatBtnLocationL
                    : styles.floatBtnLocationR
            }
        >
            <View style={ styles.floatBtn } >
                <Text style={ styles.floatBtnText }>{title}</Text>
            </View>
        </TouchableOpacity>
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