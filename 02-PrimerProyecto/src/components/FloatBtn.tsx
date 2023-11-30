import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

interface Props {
    position: 'bottomR' | 'bottomL';
    title: String;
    onPress: () =>  void;
}

const FloatBtn = ({title, onPress, position = 'bottomR'}: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
            >
                <View style={ styles.floatBtn } >
                    <Text style={ styles.floatBtnText }>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    const antroid = () => {
        return (
            <View
                style={[ 
                    styles.floatBtnLocation,
                    (position === 'bottomL') ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={ styles.floatBtn } >
                        <Text style={ styles.floatBtnText }>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    };

    return (Platform.OS === 'ios') ? ios() : antroid();
}

export default FloatBtn;

const styles = StyleSheet.create({
    floatBtn: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 8,
    },
    floatBtnText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    floatBtnLocation: {
        bottom: 25,
        position: 'absolute',
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
});