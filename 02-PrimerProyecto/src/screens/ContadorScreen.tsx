import React from 'react'
import { Text, View } from 'react-native'

const ContadorScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top: -15
            }}>Contador: XXX</Text>
        </View>
    )
}

export default ContadorScreen